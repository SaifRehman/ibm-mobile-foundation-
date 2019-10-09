import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  balance: string;

  constructor() {}

  getBalance() {
    const resourceRequest = new WLResourceRequest('/adapters/ResourceAdapter/balance', WLResourceRequest.GET);
    resourceRequest.send().then((response) => {
      console.log('-->  getBalance(): Success ', response);
      this.balance = response.responseText;
    },
    (error) => {
        console.log('-->  getBalance():  ERROR ', error.responseText);
        console.log(error);
    });
  }
}
