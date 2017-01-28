import { EventAggregator } from 'aurelia-event-aggregator';
export declare class StarRate {
    private ea;
    rate: number;
    maxRate: number;
    readOnly: boolean;
    color: string;
    clicked: any;
    private mouseRate;
    constructor(ea: EventAggregator);
    mouseEnter(value: number): void;
    setRate(value: number): void;
    mouseLeft(): void;
}
