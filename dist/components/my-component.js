import { p as proxyCustomElement, H, h, c as Host } from './p-f7dad1e2.js';

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
    componentDidLoad() {
        console.log('background: ', this.background);
        console.log('First prop:', this.first);
        console.log('Middle prop:', this.middle);
        console.log('Last prop:', this.last);
    }
    render() {
        return (h(Host, { key: '6b43bed1a6828134d0e21029b097531821bcb49f', style: { background: this.background } }, "Hello, World! I'm ", h("span", { key: '49e97d2a72bfae526338e72b2121896435b0d79a', style: { color: this.first?.color, fontSize: this.first?.fontSize, fontWeight: this.first?.fontWeight } }, this.first?.value), "\u00A0", h("span", { key: 'be108e1934321056b226ace7e4b9822e7032009b', style: { color: this.middle?.color, fontSize: this.middle?.fontSize, fontWeight: this.middle?.fontWeight } }, this.middle?.value), "\u00A0", h("span", { key: '1c4856caf6a9eeac359a9b601a0b39d957029a37', style: { color: this.last?.color, fontSize: this.last?.fontSize, fontWeight: this.last?.fontWeight } }, this.last?.value), h("slot", { key: '36919265c9eb9051b7dd4eb81b733f438ba331cd' })));
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