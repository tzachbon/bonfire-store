import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormContainerComponent } from './form-container/form-container.component';
import { NavComponent } from './nav/nav.component';
import { TableComponent } from './table/table.component';
import { SharedModule } from './shared/shared.module';
import { BonfireStoreModule } from 'bonfire-store';
import { Food } from './table/table-datasource';

export class Store {
  food: Food[] = [
    {
      desc: 'test',
      name: 'test'
    }
  ];
}

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FormContainerComponent,
    TableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    BonfireStoreModule.forRoot(new Store())
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: []
})
export class AppModule { }
