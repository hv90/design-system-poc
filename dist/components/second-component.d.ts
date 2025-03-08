import type { Components, JSX } from "../types/components";

interface SecondComponent extends Components.SecondComponent, HTMLElement {}
export const SecondComponent: {
    prototype: SecondComponent;
    new (): SecondComponent;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
