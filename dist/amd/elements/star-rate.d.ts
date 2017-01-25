export declare class StarRate {
    rate: number;
    maxRate: number;
    readOnly: boolean;
    color: string;
    private mouseRate;
    mouseEnter(value: number): void;
    setRate(value: number): void;
    mouseLeft(): void;
}
