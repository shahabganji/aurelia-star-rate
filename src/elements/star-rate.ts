

import { bindable, bindingMode } from 'aurelia-framework';
import { EventAggregator } from 'aurelia-event-aggregator';
import { StarRateClicked } from './StarRateClicked';
export class StarRate {

  @bindable({ defaultBindingMode: bindingMode.twoWay }) rate: number;
  @bindable maxRate: number;
  @bindable readOnly: boolean = true;
  @bindable color: string = 'Black';

  private mouseRate: number = -1;

  constructor(private ea: EventAggregator) {
  }



  mouseEnter(value: number) {

    if (this.readOnly) {
      return;
    }

    if (value > this.maxRate) {
      this.mouseRate = this.maxRate;
    } else {
      this.mouseRate = value + 1;
    }
  }

  setRate(value: number) {

    if (this.readOnly) {
      return;
    }
    this.rate = value + 1;

    this.ea.publish(new StarRateClicked(this.rate, value));
  }

  mouseLeft() {
    if (this.readOnly) {
      return;
    }
    this.mouseRate = -1;
  }


}
