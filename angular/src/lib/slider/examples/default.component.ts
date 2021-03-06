import { Component } from '@angular/core';
import { SliderChange } from '@momentum-ui/angular/slider';

@Component({
  selector: 'example-slider-default',
  template: `
    <div>
      {{ label }}
    </div>
    <md-slider
      [(ngModel)]="value"
      max="500"
      tick="100"
      (change)="change($event)"
    ></md-slider>
  `,
})
export class ExampleSliderDefaultComponent {
  value: number = 200;
  get label(): string {
    return `${this.value}`;
  }

  change(event: SliderChange) {
    console.info(event);
  }
}
