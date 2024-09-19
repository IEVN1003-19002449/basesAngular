import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './product/product-list/product-list.component';
import { FormsModule } from '@angular/forms';
import { ProductoFilterPipe } from './product/producto-filter.pipe';
import { OperasBasComponent } from './formularios/operas-bas/operas-bas.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    FormsModule,
    ProductoFilterPipe,
    OperasBasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
