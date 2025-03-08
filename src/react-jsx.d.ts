import { JSX as StencilJSX } from "./components";

declare module "react" {
  export namespace JSX {
    type StencilIntrinsicElements = {
      [K in keyof StencilJSX.IntrinsicElements]: StencilJSX.IntrinsicElements[K] & {
        children?: React.ReactNode;
        key?: string;
      };
    };

    interface IntrinsicElements extends StencilIntrinsicElements {}
  }
}
