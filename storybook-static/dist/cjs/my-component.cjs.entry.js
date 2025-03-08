'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-4dad9d97.js');

const myComponentCss = ":host{display:block}";
const MyComponentStyle0 = myComponentCss;

const MyComponent = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    /**
     * The first name
     */
    first;
    /**
     * The middle name
     */
    middle;
    /**
     * The last name
     */
    last;
    background;
    render() {
        return (index.h(index.Host, { key: '9159babb6daad97eb619901c7bd50a2c0e5f39ac', style: { background: this.background } }, "Hello, World! I'm ", index.h("span", { key: 'ba5d7f2644c4620bc3071d1ce7b0afb31aec53aa', style: { color: this.first?.color, fontSize: this.first?.fontSize, fontWeight: this.first?.fontWeight } }, this.first?.value), "\u00A0", index.h("span", { key: 'f258d1f9df638582a65cbfd587f7cbb864cdd0b0', style: { color: this.middle?.color, fontSize: this.middle?.fontSize, fontWeight: this.middle?.fontWeight } }, this.middle?.value), "\u00A0", index.h("span", { key: 'da1b85eca4725f4dea1e785e646d1170a3c62d6b', style: { color: this.last?.color, fontSize: this.last?.fontSize, fontWeight: this.last?.fontWeight } }, this.last?.value), index.h("slot", { key: '0f3f72f620001f6ea19de0532deab6991b67c93b' })));
    }
};
MyComponent.style = MyComponentStyle0;

exports.my_component = MyComponent;

//# sourceMappingURL=my-component.cjs.entry.js.map