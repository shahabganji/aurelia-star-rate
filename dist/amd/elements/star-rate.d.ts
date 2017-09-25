import { EventAggregator } from 'aurelia-event-aggregator';
export declare class StarRate {
    private ea;
    rate: number;
    maxRate: number;
    readOnly: boolean;
    color: string;
    rtl: boolean;
    fullStar: string;
    halfStar: string | null;
    emptyStar: string;
    clicked: any;
    icons: Array<HTMLElement>;
    private mouseRate;
    private showHalfStar;
    constructor(ea: EventAggregator);
    mouseMove(event: any, index: any): void;
    setRate(index: number): void;
    mouseLeft(): void;
    readonly currentValue: number;
    readonly hasFloatingPoint: boolean;
    readonly fixedPoint: number;
}
