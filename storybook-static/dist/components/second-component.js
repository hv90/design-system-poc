import { p as proxyCustomElement, H, h, c as Host } from './p-e250822f.js';

const secondComponentCss = ":host{display:block}";
const SecondComponentStyle0 = secondComponentCss;

const SecondComponent$1 = /*@__PURE__*/ proxyCustomElement(class SecondComponent extends H {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
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
        return (h(Host, { key: '7ec121bbb8d683da46083d1eff8ff5deb131c638' }, h("button", { key: '54ebd63891d490c0e4897d5a90ee41885a67b732', style: { backgroundColor: this.background, padding: this.getSize(), color: this.color, borderRadius: this.getBorder() }, onClick: this.clickButton }, this.label, h("slot", { key: 'aa49a4672a8f4964df7a0c2caedfd8103a1f9aab' }))));
    }
    static get style() { return SecondComponentStyle0; }
}, [1, "second-component", {
        "label": [1],
        "size": [1],
        "borderRadius": [1, "border-radius"],
        "color": [1],
        "background": [1],
        "clickButton": [16]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["second-component"];
    components.forEach(tagName => { switch (tagName) {
        case "second-component":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, SecondComponent$1);
            }
            break;
    } });
}
defineCustomElement$1();

const SecondComponent = SecondComponent$1;
const defineCustomElement = defineCustomElement$1;

export { SecondComponent, defineCustomElement };

//# sourceMappingURL=second-component.js.map