import { autoinject, computedFrom } from 'aurelia-framework';

import { EventAggregator } from 'aurelia-event-aggregator';
import { StarRateClicked } from 'aurelia-star-rate';

@autoinject
export class Welcome {
  public heading = 'Welcome to the Aurelia Navigation App!';
  public firstName = 'John';
  public lastName = 'Doe';
  private previousValue = this.fullName;

  constructor(ea: EventAggregator) {
    // tslint:disable-next-line:no-console
    ea.subscribe(StarRateClicked, x => console.info(`E.Aggregator : Rate changed from  ${x.oldRate} to ${x.newRate}`));
  }


  @computedFrom('firstName', 'lastName')
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  public submit() {
    this.previousValue = this.fullName;
    alert(`Welcome, ${this.fullName}!`);
  }

  public canDeactivate() {
    if (this.fullName !== this.previousValue) {
      return confirm('Are you sure you want to leave?');
    }
  }

  // tslint:disable-next-line:no-empty
  private star_clicked(newRate, oldRate) {
    // tslint:disable-next-line:no-console
    console.info(`clicked: Rate changed from  ${oldRate} to ${newRate}`);
  }
}

// tslint:disable-next-line:max-classes-per-file
export class UpperValueConverter {
  public toView(value) {
    return value && value.toUpperCase();
  }
}
