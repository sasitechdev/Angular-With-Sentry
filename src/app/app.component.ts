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

  throwArithmeticException() {
    console.error("Error");
    throw Error('Arithmetic Exception');
  }

  throwNaNException() {
    console.error("Error");
    throw Error('NaN Exception');
  }

  throwURIError() {
    console.error("Error");
    throw Error('URI malformed');
  }

  onSubmit() {
    console.log("Success");
  }
}
