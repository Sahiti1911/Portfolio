
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'https://Sahiti1911.github.io/Portfolio/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/Portfolio"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 43244, hash: '4f07f0850ba99ee14f1087b42213912bd5acb188dc06649576f8fd33ccbf12bf', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 9576, hash: 'd4b3cf545c94e2fa7a3dc4107c19eb50aa614fd8dad569da8cd1eccb76beef72', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 205333, hash: 'e9536449fc18adc367d09ffb2df0e210c8992707f0e96e73fecf53759149ac33', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-LBQ7AFTE.css': {size: 378960, hash: 'Gdo4oi3JhkE', text: () => import('./assets-chunks/styles-LBQ7AFTE_css.mjs').then(m => m.default)}
  },
};
