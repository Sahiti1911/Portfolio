
export default {
  basePath: 'https://sahiti1911.github.io/Portfolio',
  supportedLocales: {
  "en-US": ""
},
  entryPoints: {
    '': () => import('./main.server.mjs')
  },
};
