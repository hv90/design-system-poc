import type { StoryObj } from '@storybook/web-components';
import type { HeaderProps } from './Header';
declare const meta: {
    title: string;
    tags: string[];
    render: (args: HeaderProps) => import("lit-html").TemplateResult<1>;
    args: {
        onLogin: import("@vitest/spy").Mock<(...args: any[]) => any>;
        onLogout: import("@vitest/spy").Mock<(...args: any[]) => any>;
        onCreateAccount: import("@vitest/spy").Mock<(...args: any[]) => any>;
    };
};
export default meta;
type Story = StoryObj<HeaderProps>;
export declare const LoggedIn: Story;
export declare const LoggedOut: Story;
