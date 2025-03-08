declare const meta: {
    title: string;
    component: string;
    tags: string[];
    args: {
        label: string;
        size: string;
        color: string;
        backgroundColor: string;
        borderRadius: string;
    };
    argTypes: {
        label: {
            control: string;
            description: string;
        };
        size: {
            control: {
                type: string;
            };
            options: string[];
            description: string;
        };
        borderRadius: {
            control: {
                type: string;
            };
            options: string[];
            description: string;
        };
        color: {
            control: string;
            description: string;
        };
        backgroundColor: {
            control: string;
            description: string;
        };
        clickButton: {
            action: string;
            description: string;
        };
    };
};
export default meta;
export declare const Default: {
    args: {
        label: string;
        size: string;
        color: string;
        backgroundColor: string;
        borderRadius: string;
    };
    render: ({ label, size, borderRadius, color, backgroundColor, clickButton }: {
        label: any;
        size: any;
        borderRadius: any;
        color: any;
        backgroundColor: any;
        clickButton: any;
    }) => import("lit-html").TemplateResult<1>;
};
export declare const LargeButton: {
    args: {
        label: string;
        size: string;
        color: string;
        backgroundColor: string;
        borderRadius: string;
    };
    render: ({ label, size, borderRadius, color, backgroundColor, clickButton }: {
        label: any;
        size: any;
        borderRadius: any;
        color: any;
        backgroundColor: any;
        clickButton: any;
    }) => import("lit-html").TemplateResult<1>;
};
export declare const SmallRedButton: {
    args: {
        label: string;
        size: string;
        color: string;
        backgroundColor: string;
        borderRadius: string;
    };
    render: ({ label, size, borderRadius, color, backgroundColor, clickButton }: {
        label: any;
        size: any;
        borderRadius: any;
        color: any;
        backgroundColor: any;
        clickButton: any;
    }) => import("lit-html").TemplateResult<1>;
};
