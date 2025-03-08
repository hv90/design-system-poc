import { r as registerInstance, h, H as Host } from './index-78a47835.js';

const myComponentCss = ":host{display:block}";
const MyComponentStyle0 = myComponentCss;

const MyComponent = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
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
};
MyComponent.style = MyComponentStyle0;

export { MyComponent as my_component };

//# sourceMappingURL=my-component.entry.js.map