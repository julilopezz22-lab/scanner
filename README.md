# CrossList 🏷️

App de celular (PWA) para **crosslistear**: cargás un artículo **una sola vez** y la app
genera el contenido optimizado para publicarlo en **eBay, Poshmark, Mercari, Vinted, Depop
y Facebook Marketplace**. Pensada para ser rápida y funcionar offline.

## Qué hace

- 📷 **Fotos**: subís varias, se comprimen solas y se guardan en el dispositivo.
- ✍️ **Un solo formulario**: título, marca, talle, color, estado, precio, **medidas**,
  descripción y palabras clave.
- 🤖 **Contenido por marketplace**: para cada plataforma genera el **título recortado a su
  límite** real de caracteres y una **descripción con hashtags** adaptados (Poshmark,
  Mercari, Vinted y Depop los premian; eBay y Facebook no).
- 📐 **Medidas**: las cargás una vez y se suman a la descripción de cada plataforma (bajan
  preguntas y devoluciones).
- 🧩 **Plantillas de descripción**: guardás textos que reusás siempre (envío, devoluciones,
  cuidado) y los insertás con un toque.
- 📤 **Compartir fotos**: mandás las fotos del artículo directo al selector del celu
  (Depop, Instagram, WhatsApp…) o las descargás al rollo.
- 📋 **Copiar con un toque** título y descripción, y **abrir cada app** en la pantalla de
  "crear publicación".
- 🔄 **Tracking de estado** por plataforma: *sin publicar / publicado / vendido*.
- ✅ **Anti doble-venta**: al marcar algo como *Vendido*, te recuerda dar de baja la
  publicación en el resto.
- 📊 **Resumen**: artículos, activos, vendidos e ingresos.
- 💾 **Backup**: exportar / importar todo en un `.json`.

## Por qué funciona así (sin "publicar automático")

Solo **eBay** tiene API pública para publicar. Poshmark, Mercari, Vinted y Facebook
Marketplace **no la tienen**, y automatizar sus formularios con bots viola sus términos y
hace que te baneen la cuenta. Por eso CrossList te ahorra el 90% del trabajo —escribir
todo bien una vez y tener el texto listo por plataforma— y deja el "pegar y publicar" en
tus manos, que es seguro y rápido.

## Cómo usarla en el celular

1. Abrí la URL desplegada (ver abajo) en el navegador del celu.
2. **iPhone (Safari)**: Compartir → *Agregar a inicio*. **Android (Chrome)**: menú →
   *Instalar app*. Queda como una app más, funciona offline.
3. ➕ Nuevo → cargás el artículo → **Guardar y crosslistear**.
4. En cada tarjeta de marketplace: *Copiar*, *Abrir app*, pegar, publicar, y marcar
   **Publicado**.

## Deploy (gratis, en Vercel)

El proyecto es estático: subí esta carpeta a Vercel (o GitHub → Vercel) y listo. No
necesita backend para la app de crosslisting.

- `index.html` — la app de crosslisting (PWA).
- `manifest.webmanifest`, `sw.js`, `icon*.svg` — para que sea instalable y offline.
- `scanner.html` + `api/lookup.js` — la herramienta anterior de escaneo de códigos
  (Walmart → eBay/Amazon), se conserva pero ya no es la pantalla principal.

## Privacidad

Tus artículos y fotos se guardan **solo en tu dispositivo** (IndexedDB). No hay servidor ni
cuenta. Hacé *Exportar copia* seguido para no perder datos si borrás el navegador.
