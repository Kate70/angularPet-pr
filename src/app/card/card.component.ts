import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users/users.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],  
})

export class CardComponent implements OnInit {
  base = 'USD';
  baseSecond = 'EUR';
  cont2 = 'UAH';
  inputV = 1;
  currJson: any = [];
  result: any = '';
  resultSecond: any = ''
  constructor(private currency: UsersService) {}
  ngOnInit(): void {
    this.getInfo();
    this.getInfoSecond();
  }
  getInfo() {
    this.currency
      .getData(this.base, this.cont2, this.inputV)
      .subscribe((data) => {
        this.currJson = JSON.stringify(data);
        this.currJson = JSON.parse(this.currJson);
        this.resultSecond = this.currJson.conversion_result;
      });
  }
  getInfoSecond() {
    this.currency
      .getData(this.baseSecond, this.cont2, this.inputV)
      .subscribe((data) => {
        this.currJson = JSON.stringify(data);
        this.currJson = JSON.parse(this.currJson);
        this.result = this.currJson.conversion_result;
      });
    }
}
