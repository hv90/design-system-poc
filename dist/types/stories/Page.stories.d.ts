import type { StoryObj } from '@storybook/web-components';
import type { PageProps } from './Page';
declare const meta: {
    title: string;
    render: (args: PageProps) => import("lit-html").TemplateResult<1>;
};
export default meta;
type Story = StoryObj<PageProps>;
export declare const LoggedIn: Story;
export declare const LoggedOut: Story;
