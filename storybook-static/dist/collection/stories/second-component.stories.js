import { html } from "lit";
const meta = {
    title: 'Components/SecondComponent',
    component: 'second-component',
    tags: ['autodocs'],
    args: {
        label: 'Click Me',
        size: 'medium',
        color: 'white',
        backgroundColor: 'blue',
        borderRadius: 'medium',
    },
    argTypes: {
        label: {
            control: 'text',
            description: 'Label text inside the button',
        },
        size: {
            control: { type: 'select' },
            options: ['large', 'medium', 'small'],
            description: 'Size of the button',
        },
        borderRadius: {
            control: { type: 'select' },
            options: ['none', 'large', 'medium', 'small'],
            description: 'Border radius of the button',
        },
        color: {
            control: 'color',
            description: 'Text color of the button',
        },
        backgroundColor: {
            control: 'color',
            description: 'Background color of the button',
        },
        clickButton: {
            action: 'clicked',
            description: 'Action triggered on button click',
        },
    },
};
export default meta;
export const Default = {
    args: {
        label: 'Click Me',
        size: 'medium',
        color: 'white',
        backgroundColor: 'blue',
        borderRadius: 'none',
        clickButton: () => {
            alert('hello world');
        },
    },
    render: ({ label, size, borderRadius, color, backgroundColor, clickButton }) => {
        return html `
      <second-component label=${label} size=${size} borderRadius=${borderRadius} color=${color} background=${backgroundColor} .clickButton=${clickButton}></second-component>
    `;
    },
};
export const LargeButton = {
    args: {
        label: 'Large Button',
        size: 'large',
        color: 'white',
        backgroundColor: 'green',
        borderRadius: 'medium',
        clickButton: () => {
            'this function was not binded so it could be displayed';
            alert('hello world');
        },
    },
    render: ({ label, size, borderRadius, color, backgroundColor, clickButton }) => {
        return html `
      <second-component label=${label} size=${size} borderRadius=${borderRadius} color=${color} background=${backgroundColor} clickButton=${clickButton}></second-component>
    `;
    },
};
export const SmallRedButton = {
    args: {
        label: 'Small Button',
        size: 'small',
        color: 'white',
        backgroundColor: 'red',
        borderRadius: 'small',
        clickButton: () => {
            'this function was not binded so it could be displayed';
            alert('hello world');
        },
    },
    render: ({ label, size, borderRadius, color, backgroundColor, clickButton }) => {
        return html `
      <second-component label=${label} size=${size} borderRadius=${borderRadius} color=${color} background=${backgroundColor} clickButton=${clickButton}></second-component>
    `;
    },
};
//# sourceMappingURL=second-component.stories.js.map
