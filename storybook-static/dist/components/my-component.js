import { p as proxyCustomElement, H, h, c as Host } from './p-e250822f.js';

const myComponentCss = ":host{display:block}";
const MyComponentStyle0 = myComponentCss;

const MyComponent$1 = /*@__PURE__*/ proxyCustomElement(class MyComponent extends H {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
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
        return (h(Host, { key: '9159babb6daad97eb619901c7bd50a2c0e5f39ac', style: { background: this.background } }, "Hello, World! I'm ", h("span", { key: 'ba5d7f2644c4620bc3071d1ce7b0afb31aec53aa', style: { color: this.first?.color, fontSize: this.first?.fontSize, fontWeight: this.first?.fontWeight } }, this.first?.value), "\u00A0", h("span", { key: 'f258d1f9df638582a65cbfd587f7cbb864cdd0b0', style: { color: this.middle?.color, fontSize: this.middle?.fontSize, fontWeight: this.middle?.fontWeight } }, this.middle?.value), "\u00A0", h("span", { key: 'da1b85eca4725f4dea1e785e646d1170a3c62d6b', style: { color: this.last?.color, fontSize: this.last?.fontSize, fontWeight: this.last?.fontWeight } }, this.last?.value), h("slot", { key: '0f3f72f620001f6ea19de0532deab6991b67c93b' })));
    }
    static get style() { return MyComponentStyle0; }
}, [1, "my-component", {
        "first": [16],
        "middle": [16],
        "last": [16],
        "background": [1]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["my-component"];
    components.forEach(tagName => { switch (tagName) {
        case "my-component":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, MyComponent$1);
            }
            break;
    } });
}
defineCustomElement$1();

const MyComponent = MyComponent$1;
const defineCustomElement = defineCustomElement$1;

export { MyComponent, defineCustomElement };

//# sourceMappingURL=my-component.js.map