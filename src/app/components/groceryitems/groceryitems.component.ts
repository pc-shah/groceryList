import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { HelperService } from 'src/app/services/helper.service';

@Component({
  selector: 'app-groceryitems',
  templateUrl: './groceryitems.component.html',
  styleUrls: ['./groceryitems.component.scss']
})
export class GroceryitemsComponent implements OnInit {
  form: any;
  public groceryItems: any[] = [];
  public cartItems: any[] = [];
  constructor(private fb: FormBuilder, private _helper: HelperService, private route: Router) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      item: [''],
      price: ['']
    })
  }

  addItems() {
    let gItem = { item: this.form?.controls.item.value, price: this.form?.controls.price.value, id: (new Date()).getTime() }
    this.groceryItems.push(gItem);
  }

  addToCart(item: any) {
    this.cartItems.push(item);
    console.log(this.cartItems);
  }

  moveToList() {
    this._helper.listItems.next(this.cartItems);
    this.route.navigate(['/list']);
  }

}
