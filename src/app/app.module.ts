import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GroceryitemsComponent } from './components/groceryitems/groceryitems.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HelperService } from './services/helper.service';
import { CartdisplayComponent } from './components/cartdisplay/cartdisplay.component';

@NgModule({
  declarations: [
    AppComponent,
    GroceryitemsComponent,
    CartdisplayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [HelperService],
  bootstrap: [AppComponent]
})
export class AppModule { }
