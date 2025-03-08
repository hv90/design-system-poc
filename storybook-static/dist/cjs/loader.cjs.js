'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-4dad9d97.js');
const appGlobals = require('./app-globals-3a1e7e63.js');

const defineCustomElements = async (win, options) => {
  if (typeof window === 'undefined') return undefined;
  await appGlobals.globalScripts();
  return index.bootstrapLazy([["my-component.cjs",[[1,"my-component",{"first":[16],"middle":[16],"last":[16],"background":[1]}]]],["second-component.cjs",[[1,"second-component",{"label":[1],"size":[1],"borderRadius":[1,"border-radius"],"color":[1],"background":[1],"clickButton":[16]}]]]], options);
};

exports.setNonce = index.setNonce;
exports.defineCustomElements = defineCustomElements;

//# sourceMappingURL=loader.cjs.js.map