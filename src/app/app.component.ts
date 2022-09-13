import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Angular-With-Sentry';

  testBtnClicked() {
    console.error("Error");
    var test: any = {};
    console.log("TEST result >>> ", test['test']['welcome']);
  }
}
