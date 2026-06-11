// Vercel serverless function: /api/lookup?upc=XXXXXXXXXXXX
//
// Corre en el servidor de Vercel (no en el navegador), así que NO sufre el
// bloqueo CORS de UPCitemdb. El celular llama a /api/lookup y este proxy
// consulta la base de productos y devuelve el JSON tal cual.

export default async function handler(req, res) {
  // Permitir que cualquier origen consuma esta función (por las dudas).
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  if (req.method === 'OPTIONS') {
    res.status(204).end();
    return;
  }

  const raw = (req.query && req.query.upc) ? String(req.query.upc) : '';
  const upc = raw.replace(/[^0-9]/g, '');
  if (!upc) {
    res.status(400).json({ error: 'missing_upc', message: 'Falta el parámetro ?upc=' });
    return;
  }

  try {
    const r = await fetch(
      'https://api.upcitemdb.com/prod/trial/lookup?upc=' + encodeURIComponent(upc),
      { headers: { Accept: 'application/json' } }
    );
    const text = await r.text();

    // Reenviamos el cuerpo original y un poco de caché para no gastar el
    // límite diario del plan trial si escaneás el mismo producto dos veces.
    res.setHeader('Content-Type', 'application/json; charset=utf-8');
    res.setHeader('Cache-Control', 's-maxage=86400, stale-while-revalidate=86400');
    res.status(r.status).send(text);
  } catch (e) {
    res.status(502).json({
      error: 'lookup_failed',
      message: 'No se pudo consultar la base de productos.',
      detail: String((e && e.message) || e)
    });
  }
}
