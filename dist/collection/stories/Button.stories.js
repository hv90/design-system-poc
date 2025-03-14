import { fn } from "@storybook/test";
import { Button } from "./Button";
// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta = {
    title: 'Example/Button',
    tags: ['autodocs'],
    render: (args) => Button(args),
    argTypes: {
        backgroundColor: { control: 'color' },
        size: {
            control: { type: 'select' },
            options: ['small', 'medium', 'large'],
        },
    },
    args: { onClick: fn() },
};
export default meta;
// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary = {
    args: {
        primary: true,
        label: 'Button',
    },
};
export const Secondary = {
    args: {
        label: 'Button',
    },
};
export const Large = {
    args: {
        size: 'large',
        label: 'Button',
    },
};
export const Small = {
    args: {
        size: 'small',
        label: 'Button',
    },
};
//# sourceMappingURL=Button.stories.js.map
