
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'https://sahiti1911.github.io/Portfolio/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/Portfolio"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 43244, hash: '56aa88d72df205568d947c0338168ee7ee0340812cc246b90e14ea774335f2d3', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 9576, hash: '47e9985cf170a76a1404fee7c7b467607e17567bfa7df16002f77a53866382f3', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 194495, hash: 'fa305f65afb4b574b0968d53f99a38208159311dee44dba2e4492f39a436d3f4', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-LBQ7AFTE.css': {size: 378960, hash: 'Gdo4oi3JhkE', text: () => import('./assets-chunks/styles-LBQ7AFTE_css.mjs').then(m => m.default)}
  },
};
