import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CartdisplayComponent } from './components/cartdisplay/cartdisplay.component';
import { GroceryitemsComponent } from './components/groceryitems/groceryitems.component';

const routes: Routes = [{
  path: 'grocery',
  component: GroceryitemsComponent
},
{
  path: 'list',
  component: CartdisplayComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
