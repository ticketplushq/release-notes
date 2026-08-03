// @ts-check
import { defineConfig } from 'astro/config'
import starlight from '@astrojs/starlight'

// Los 13 idiomas oficiales del producto, tomados de
// ticketing-core/config/initializers/i18n.rb.
//
// `es` es el default y no lleva prefijo de ruta: la mayoria de los clientes de
// Ticketplus leen en espaniol, y obligarlos a /es/ agrega un salto inutil.
export default defineConfig({
  site: 'https://releases.ticketplus.com',

  integrations: [
    starlight({
      title: 'Novedades de Ticketplus',
      description:
        'Guias paso a paso de cada mejora que lanzamos, organizadas por servicio.',

      defaultLocale: 'root',
      locales: {
        root:    { label: 'Espaniol',            lang: 'es' },
        'es-es': { label: 'Espaniol (Espania)',  lang: 'es-ES' },
        en:      { label: 'English',             lang: 'en' },
        pt:      { label: 'Portugues',           lang: 'pt' },
        'zh-tw': { label: '繁體中文',             lang: 'zh-TW' },
        'zh-cn': { label: '简体中文',             lang: 'zh-CN' },
        fr:      { label: 'Francais',            lang: 'fr' },
        de:      { label: 'Deutsch',             lang: 'de' },
        it:      { label: 'Italiano',            lang: 'it' },
        ja:      { label: '日本語',               lang: 'ja' },
        ko:      { label: '한국어',               lang: 'ko' },
        hi:      { label: 'हिन्दी',                lang: 'hi' },
        id:      { label: 'Bahasa Indonesia',    lang: 'id' },
      },

      // Un grupo por servicio. El cliente busca por lo que usa, no por cuando salio.
      sidebar: [
        { label: 'Ticketing', items: [{ autogenerate: { directory: 'ticketing' } }] },
        { label: 'Boleteria', items: [{ autogenerate: { directory: 'boleteria' } }] },
        { label: 'Cashless', items: [{ autogenerate: { directory: 'cashless' } }] },
        { label: 'Totems', items: [{ autogenerate: { directory: 'totems' } }] },
        { label: 'POS / Bites', items: [{ autogenerate: { directory: 'pos-bites' } }] },
        { label: 'Control de acceso', items: [{ autogenerate: { directory: 'control-acceso' } }] },
        { label: 'App del asistente', items: [{ autogenerate: { directory: 'app-asistente' } }] },
        { label: 'Pagos', items: [{ autogenerate: { directory: 'pagos' } }] },
        { label: 'Boletas y DTE', items: [{ autogenerate: { directory: 'boletas-dte' } }] },
        { label: 'Liquidaciones', items: [{ autogenerate: { directory: 'liquidaciones' } }] },
        { label: 'Streaming', items: [{ autogenerate: { directory: 'streaming' } }] },
        { label: 'Staff', items: [{ autogenerate: { directory: 'staff' } }] },
        { label: 'Soporte', items: [{ autogenerate: { directory: 'soporte' } }] },
      ],

      // Sin enlace a GitHub: este sitio es para clientes, no para desarrolladores.
      social: [],
      pagefind: true,
    }),
  ],
})
