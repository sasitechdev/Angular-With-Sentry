import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ShipIt: Angular-With-Sentry';

  generateTypeError() {
    console.error("Error");
    var test: any = {};
    console.log("TEST result >>> ", test[0][1]);
  }

  throwURLError() {
    console.error("Error");
    throw Error('URL Error');
  }

  throwNaNError() {
    console.error("Error");
    throw Error('NaN Error');
  }

  throwPageNotFoundError() {
    console.error("Error");
    throw Error('Page Not Found Error');
  }
}
