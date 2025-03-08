import { Host, h } from "@stencil/core";
export class MyComponent {
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
    static get is() { return "my-component"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["my-component.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["my-component.css"]
        };
    }
    static get properties() {
        return {
            "first": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "{ value: string; color: string; fontSize: string; fontWeight: string }",
                    "resolved": "{ value: string; color: string; fontSize: string; fontWeight: string; }",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "The first name"
                },
                "getter": false,
                "setter": false
            },
            "middle": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "{ value: string; color: string; fontSize: string; fontWeight: string }",
                    "resolved": "{ value: string; color: string; fontSize: string; fontWeight: string; }",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "The middle name"
                },
                "getter": false,
                "setter": false
            },
            "last": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "{ value: string; color: string; fontSize: string; fontWeight: string }",
                    "resolved": "{ value: string; color: string; fontSize: string; fontWeight: string; }",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "The last name"
                },
                "getter": false,
                "setter": false
            },
            "background": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "attribute": "background",
                "reflect": false
            }
        };
    }
}
//# sourceMappingURL=my-component.js.map
