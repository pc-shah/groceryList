import { Component, OnInit } from '@angular/core';
import { HelperService } from 'src/app/services/helper.service';

@Component({
  selector: 'app-cartdisplay',
  templateUrl: './cartdisplay.component.html',
  styleUrls: ['./cartdisplay.component.scss']
})
export class CartdisplayComponent implements OnInit {

  constructor(private helper: HelperService) { }
  public cartItems: any[] = [];
  ngOnInit(): void {
    this.helper.listItems.subscribe((res) => {
      this.cartItems = res;
    })
  }

  onDelete(item: any) {
    for (var i = 0; i < this.cartItems.length; i++) {
      if (item.id == this.cartItems[i].id) {
        this.cartItems.splice(i, 1);
        break;
      }
    }
  }

}
