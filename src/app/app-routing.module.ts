import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BeerCategoriesComponent } from './beer-categories/beer-categories.component';
import { CatDetailComponent } from './cat-detail/cat-detail.component';
import { BeersListComponent } from './beers-list/beers-list.component';
import { BeersDetailsComponent } from './beers-details/beers-details.component';
import { AddBeersComponent } from './add-beers/add-beers.component';
import { SearchBeersComponent } from './search-beers/search-beers.component';

const routes: Routes = [
    { path: 'categories', component: BeerCategoriesComponent },
    { path: 'beers', redirectTo: '/categories', pathMatch: 'full' },
    { path: 'add-beers', component: AddBeersComponent },
    { path: 'search', component: SearchBeersComponent },
    { path: 'beers/:id', component: BeersDetailsComponent },
    { path: 'categories/:id', component: CatDetailComponent },
    { path: '', redirectTo: '/categories', pathMatch: 'full' },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes, {useHash: true}) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
