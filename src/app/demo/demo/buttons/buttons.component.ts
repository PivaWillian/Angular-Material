import { Component } from '@angular/core';

@Component({
  selector: 'app-buttons',
  template: `
  <button mat-button color="accent">
  <mat-icon>face</mat-icon>
  Basic</button>

  <mat-checkbox class="example-margin">Check me!</mat-checkbox>
  `,
  styles: [
  ]
})
export class ButtonsComponent {

}
