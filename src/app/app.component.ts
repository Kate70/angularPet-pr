import { Component, OnInit } from '@angular/core';
import { CardComponent } from './card/card.component';
import { UsersService } from './users/users.service';

export interface Cards {
  title: string;
  text: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  current: any = 29.5;
  data = {};
  inputV: any = '';
  currJson: any = [];
  base = 'USD';
  cont2 = 'USD';
  result: any = '';
  ngOnInit(): void {}
  constructor(private currency: UsersService) {}
  convert() {
    this.currency
      .getData(this.base, this.cont2, this.inputV)
      .subscribe((data) => {
        this.currJson = JSON.stringify(data);
        this.currJson = JSON.parse(this.currJson);

        this.result = this.currJson.conversion_result;
      });
  }

  changebase(valueA: any) {
    this.base = valueA;
    this.convert();
  }
  tocountry(valueB: any) {
    this.cont2 = valueB;
    this.convert();
  }
  inputHandler(value: any) {
    this.inputV = value;
    this.convert();
  }
}
