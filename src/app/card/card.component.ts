import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users/users.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
  // imgUrl:'https://www.google.com/search?q=%D0%BA%D0%B0%D1%80%D1%82%D0%B8%D0%BD%D0%BA%D0%B0&rlz=1C1SQJL_ukUA951UA953&sxsrf=ALiCzsYA1yPpKrF4HfIoSx34fPu7I-nwig:1653647486722&source=lnms&tbm=isch&sa=X&ved=2ahUKEwie_Z34vP_3AhUGyosKHebDDcIQ_AUoAXoECAEQAw&biw=1536&bih=722&dpr=1.25#imgrc=aCKVDqazvebneM'
})
export class CardComponent implements OnInit {
  base = 'USD';
  cont2 = 'UAH';
  inputV = 1;
  currJson: any = [];
  result: any = '';
  constructor(private currency: UsersService) {}
  ngOnInit(): void {
    this.getInfo();
  }
  getInfo() {
    this.currency
      .getData(this.base, this.cont2, this.inputV)
      .subscribe((data) => {
        this.currJson = JSON.stringify(data);
        this.currJson = JSON.parse(this.currJson);
        this.result = this.currJson.conversion_result;
      });
  }
}
