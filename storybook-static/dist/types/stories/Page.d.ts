import './page.css';
type User = {
    name: string;
};
export interface PageProps {
    user?: User;
    onLogin?: () => void;
    onLogout?: () => void;
    onCreateAccount?: () => void;
}
export declare const Page: ({ user, onLogin, onLogout, onCreateAccount }: PageProps) => import("lit-html").TemplateResult<1>;
export {};
