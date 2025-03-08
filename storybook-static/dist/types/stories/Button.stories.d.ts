import type { StoryObj } from '@storybook/web-components';
import type { ButtonProps } from './Button';
declare const meta: {
    title: string;
    tags: string[];
    render: (args: ButtonProps) => import("lit-html").TemplateResult<1>;
    argTypes: {
        backgroundColor: {
            control: "color";
        };
        size: {
            control: {
                type: "select";
            };
            options: string[];
        };
    };
    args: {
        onClick: import("@vitest/spy").Mock<(...args: any[]) => any>;
    };
};
export default meta;
type Story = StoryObj<ButtonProps>;
export declare const Primary: Story;
export declare const Secondary: Story;
export declare const Large: Story;
export declare const Small: Story;
