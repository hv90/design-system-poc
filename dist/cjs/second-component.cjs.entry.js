'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-1abe5fbd.js');

const secondComponentCss = ":host{display:block}";
const SecondComponentStyle0 = secondComponentCss;

const SecondComponent = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    label;
    size;
    borderRadius;
    color;
    background;
    clickButton;
    getSize() {
        switch (this.size) {
            case 'large':
                return '28px';
            case 'medium':
                return '22px';
            case 'small':
                return '18px';
        }
    }
    getBorder() {
        switch (this.borderRadius) {
            case 'large':
                return '20px';
            case 'medium':
                return '10px';
            case 'small':
                return '5px';
            case 'none':
                return 'none';
        }
    }
    render() {
        return (index.h(index.Host, { key: '7ec121bbb8d683da46083d1eff8ff5deb131c638' }, index.h("button", { key: '54ebd63891d490c0e4897d5a90ee41885a67b732', style: { backgroundColor: this.background, padding: this.getSize(), color: this.color, borderRadius: this.getBorder() }, onClick: this.clickButton }, this.label, index.h("slot", { key: 'aa49a4672a8f4964df7a0c2caedfd8103a1f9aab' }))));
    }
};
SecondComponent.style = SecondComponentStyle0;

exports.second_component = SecondComponent;

//# sourceMappingURL=second-component.cjs.entry.js.map