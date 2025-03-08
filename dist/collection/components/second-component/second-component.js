import { Host, h } from "@stencil/core";
export class SecondComponent {
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
    static get is() { return "second-component"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["second-component.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["second-component.css"]
        };
    }
    static get properties() {
        return {
            "label": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "attribute": "label",
                "reflect": false
            },
            "size": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "'large' | 'medium' | 'small'",
                    "resolved": "\"large\" | \"medium\" | \"small\"",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "attribute": "size",
                "reflect": false
            },
            "borderRadius": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "'none' | 'large' | 'medium' | 'small'",
                    "resolved": "\"large\" | \"medium\" | \"none\" | \"small\"",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "attribute": "border-radius",
                "reflect": false
            },
            "color": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "attribute": "color",
                "reflect": false
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
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "attribute": "background",
                "reflect": false
            },
            "clickButton": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "(e: MouseEvent) => void",
                    "resolved": "(e: MouseEvent) => void",
                    "references": {
                        "MouseEvent": {
                            "location": "global",
                            "id": "global::MouseEvent"
                        }
                    }
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false
            }
        };
    }
}
//# sourceMappingURL=second-component.js.map
