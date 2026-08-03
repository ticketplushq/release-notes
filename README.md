# Novedades de Ticketplus

Sitio publico de release notes: https://releases.ticketplus.com

Cada mejora que lanzamos, explicada paso a paso y con capturas, organizada por
el servicio que la entrega (Ticketing, Cashless, Totems, POS, ...) y no por el
repositorio que la implemento.

Disponible en los 13 idiomas oficiales del producto.

## Este repo no se edita a mano

El contenido lo genera y publica `workspace-release-notes`. Los `.mdx` y las
imagenes llegan por push desde ahi. Si encontras un error en una novedad, se
corrige en el motor, no aca.

## Desarrollo

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # genera dist/ con el indice de busqueda
```

## Estructura

```
src/content/docs/            espaniol (idioma base, sin prefijo de ruta)
src/content/docs/<locale>/   los otros 12 idiomas
public/img/<slug>/<locale>/  capturas de cada paso
```
