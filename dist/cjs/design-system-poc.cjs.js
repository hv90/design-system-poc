'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-1abe5fbd.js');
const appGlobals = require('./app-globals-3a1e7e63.js');

/*
 Stencil Client Patch Browser v4.27.2 | MIT Licensed | https://stenciljs.com
 */
var patchBrowser = () => {
  const importMeta = (typeof document === 'undefined' ? new (require('u' + 'rl').URL)('file:' + __filename).href : (document.currentScript && document.currentScript.src || new URL('design-system-poc.cjs.js', document.baseURI).href));
  const opts = {};
  if (importMeta !== "") {
    opts.resourcesUrl = new URL(".", importMeta).href;
  }
  return index.promiseResolve(opts);
};

patchBrowser().then(async (options) => {
  await appGlobals.globalScripts();
  return index.bootstrapLazy([["my-component.cjs",[[1,"my-component",{"first":[16],"middle":[16],"last":[16],"background":[1]}]]],["second-component.cjs",[[1,"second-component",{"label":[1],"size":[1],"borderRadius":[1,"border-radius"],"color":[1],"background":[1],"clickButton":[16]}]]]], options);
});

exports.setNonce = index.setNonce;

//# sourceMappingURL=design-system-poc.cjs.js.map