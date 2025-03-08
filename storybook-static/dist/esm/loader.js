import { b as bootstrapLazy } from './index-7448895c.js';
export { s as setNonce } from './index-7448895c.js';
import { g as globalScripts } from './app-globals-0f993ce5.js';

const defineCustomElements = async (win, options) => {
  if (typeof window === 'undefined') return undefined;
  await globalScripts();
  return bootstrapLazy([["my-component",[[1,"my-component",{"first":[16],"middle":[16],"last":[16],"background":[1]}]]],["second-component",[[1,"second-component",{"label":[1],"size":[1],"borderRadius":[1,"border-radius"],"color":[1],"background":[1],"clickButton":[16]}]]]], options);
};

export { defineCustomElements };

//# sourceMappingURL=loader.js.map