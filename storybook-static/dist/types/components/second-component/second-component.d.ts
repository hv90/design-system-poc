export declare class SecondComponent {
    label?: string;
    size?: 'large' | 'medium' | 'small';
    borderRadius?: 'none' | 'large' | 'medium' | 'small';
    color?: string;
    background?: string;
    clickButton?: (e: MouseEvent) => void;
    private getSize;
    private getBorder;
    render(): any;
}
