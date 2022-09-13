import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ShipIt: Angular-With-Sentry';

  testBtnClicked() {
    console.error("Error");
    var test: any = {};
    console.log("TEST result >>> ", test[0][1]);
  }

  testThrowError() {
    console.error("Error");
    throw Error('URL Exception');
  }
}
