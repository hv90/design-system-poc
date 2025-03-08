import { p as promiseResolve, b as bootstrapLazy } from './index-78a47835.js';
export { s as setNonce } from './index-78a47835.js';
import { g as globalScripts } from './app-globals-0f993ce5.js';

/*
 Stencil Client Patch Browser v4.27.2 | MIT Licensed | https://stenciljs.com
 */
var patchBrowser = () => {
  const importMeta = import.meta.url;
  const opts = {};
  if (importMeta !== "") {
    opts.resourcesUrl = new URL(".", importMeta).href;
  }
  return promiseResolve(opts);
};

patchBrowser().then(async (options) => {
  await globalScripts();
  return bootstrapLazy([["my-component",[[1,"my-component",{"first":[16],"middle":[16],"last":[16],"background":[1]}]]],["second-component",[[1,"second-component",{"label":[1],"size":[1],"borderRadius":[1,"border-radius"],"color":[1],"background":[1],"clickButton":[16]}]]]], options);
});

//# sourceMappingURL=design-system-poc.js.map