declare const meta: {
    title: string;
    component: string;
    tags: string[];
    args: {
        firstValue: string;
        firstColor: string;
        firstFontSize: string;
        firstFontWeight: string;
        middleValue: string;
        middleColor: string;
        middleFontSize: string;
        middleFontWeight: string;
        lastValue: string;
        lastColor: string;
        lastFontSize: string;
        lastFontWeight: string;
        backgroundColor: string;
    };
    argTypes: {
        firstValue: {
            control: string;
            description: string;
        };
        firstFontSize: {
            control: {
                type: string;
            };
            options: string[];
            description: string;
        };
        firstColor: {
            control: string;
            description: string;
        };
        firstFontWeight: {
            control: {
                type: string;
            };
            options: string[];
            description: string;
        };
        middleValue: {
            control: string;
            description: string;
        };
        middleFontSize: {
            control: {
                type: string;
            };
            options: string[];
            description: string;
        };
        middleColor: {
            control: string;
            description: string;
        };
        middleFontWeight: {
            control: {
                type: string;
            };
            options: string[];
            description: string;
        };
        lastValue: {
            control: string;
            description: string;
        };
        lastFontSize: {
            control: {
                type: string;
            };
            options: string[];
            description: string;
        };
        lastColor: {
            control: string;
            description: string;
        };
        lastFontWeight: {
            control: {
                type: string;
            };
            options: string[];
            description: string;
        };
        backgroundColor: {
            control: string;
        };
    };
};
export default meta;
export declare const Default: {
    render: ({ firstValue, firstColor, firstFontSize, firstFontWeight, middleValue, middleColor, middleFontSize, middleFontWeight, lastValue, lastColor, lastFontSize, lastFontWeight, backgroundColor, }: {
        firstValue: any;
        firstColor: any;
        firstFontSize: any;
        firstFontWeight: any;
        middleValue: any;
        middleColor: any;
        middleFontSize: any;
        middleFontWeight: any;
        lastValue: any;
        lastColor: any;
        lastFontSize: any;
        lastFontWeight: any;
        backgroundColor: any;
    }) => import("lit-html").TemplateResult<1>;
};
export declare const WithDifferentStyles: {
    args: {
        firstValue: string;
        firstColor: string;
        firstFontSize: string;
        firstFontWeight: string;
        middleValue: string;
        middleColor: string;
        middleFontSize: string;
        middleFontWeight: string;
        lastValue: string;
        lastColor: string;
        lastFontSize: string;
        lastFontWeight: string;
        backgroundColor: string;
    };
    render: ({ firstValue, firstColor, firstFontSize, firstFontWeight, middleValue, middleColor, middleFontSize, middleFontWeight, lastValue, lastColor, lastFontSize, lastFontWeight, backgroundColor, }: {
        firstValue: any;
        firstColor: any;
        firstFontSize: any;
        firstFontWeight: any;
        middleValue: any;
        middleColor: any;
        middleFontSize: any;
        middleFontWeight: any;
        lastValue: any;
        lastColor: any;
        lastFontSize: any;
        lastFontWeight: any;
        backgroundColor: any;
    }) => import("lit-html").TemplateResult<1>;
};
export declare const WithNoMiddleName: {
    args: {
        firstValue: string;
        firstColor: string;
        firstFontSize: string;
        firstFontWeight: string;
        lastValue: string;
        lastColor: string;
        lastFontSize: string;
        lastFontWeight: string;
        backgroundColor: string;
    };
    render: ({ firstValue, firstColor, firstFontSize, firstFontWeight, middleValue, middleColor, middleFontSize, middleFontWeight, lastValue, lastColor, lastFontSize, lastFontWeight, backgroundColor, }: {
        firstValue: any;
        firstColor: any;
        firstFontSize: any;
        firstFontWeight: any;
        middleValue: any;
        middleColor: any;
        middleFontSize: any;
        middleFontWeight: any;
        lastValue: any;
        lastColor: any;
        lastFontSize: any;
        lastFontWeight: any;
        backgroundColor: any;
    }) => import("lit-html").TemplateResult<1>;
};
