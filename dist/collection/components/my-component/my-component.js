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
    componentDidLoad() {
        console.log('background: ', this.background);
        console.log('First prop:', this.first);
        console.log('Middle prop:', this.middle);
        console.log('Last prop:', this.last);
    }
    render() {
        return (h(Host, { key: '6b43bed1a6828134d0e21029b097531821bcb49f', style: { background: this.background } }, "Hello, World! I'm ", h("span", { key: '49e97d2a72bfae526338e72b2121896435b0d79a', style: { color: this.first?.color, fontSize: this.first?.fontSize, fontWeight: this.first?.fontWeight } }, this.first?.value), "\u00A0", h("span", { key: 'be108e1934321056b226ace7e4b9822e7032009b', style: { color: this.middle?.color, fontSize: this.middle?.fontSize, fontWeight: this.middle?.fontWeight } }, this.middle?.value), "\u00A0", h("span", { key: '1c4856caf6a9eeac359a9b601a0b39d957029a37', style: { color: this.last?.color, fontSize: this.last?.fontSize, fontWeight: this.last?.fontWeight } }, this.last?.value), h("slot", { key: '36919265c9eb9051b7dd4eb81b733f438ba331cd' })));
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
