import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { BeerCategoriesComponent } from './beer-categories/beer-categories.component';
import { CatDetailComponent } from './cat-detail/cat-detail.component';
import { AppRoutingModule } from './app-routing.module';
import { BeersListComponent } from './beers-list/beers-list.component';
import { BeersDetailsComponent } from './beers-details/beers-details.component';
import { AddBeersComponent } from './add-beers/add-beers.component';
import { SearchBeersComponent } from './search-beers/search-beers.component';

import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  declarations: [
    AppComponent,
    BeerCategoriesComponent,
    CatDetailComponent,
    BeersListComponent,
    BeersDetailsComponent,
    AddBeersComponent,
    SearchBeersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    Ng2SearchPipeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
