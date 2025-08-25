
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
    'index.csr.html': {size: 43244, hash: '91f068d0b25553bd9a5cb7ad612450d47f0c6755bdd676a644b7411759e54774', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 9576, hash: '34c05330af11720020df65f4591029d4a9736e44e23f15d2b1e97191865a0cab', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 194496, hash: 'a062352162505c57d3bc07752170f55c08ef142d0741d35d11a6b4b18606b2a9', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-LBQ7AFTE.css': {size: 378960, hash: 'Gdo4oi3JhkE', text: () => import('./assets-chunks/styles-LBQ7AFTE_css.mjs').then(m => m.default)}
  },
};
