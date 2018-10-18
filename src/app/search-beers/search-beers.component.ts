import { Component, OnInit } from '@angular/core';

import { Beer } from '../beer';
import { BeerService } from '../beer.service';

import { Observable, Subject } from 'rxjs';

import {
   debounceTime, distinctUntilChanged, switchMap
 } from 'rxjs/operators';


@Component({
  selector: 'app-search-beers',
  templateUrl: './search-beers.component.html',
  styleUrls: ['./search-beers.component.css']
})
export class SearchBeersComponent implements OnInit {

  filterItems: Beer[];
  
  // Set to fix a compatibility issue between Angular and the search filter, has no use.
  name = '';
  
  constructor(private beerService: BeerService) { }
  
  // Method grabs list of all search items, assigns them to filterItems variable
  searchBeers(): void {
    this.beerService.getSearch().subscribe(beers => this.filterItems = beers);
  }

  ngOnInit(): void {
    this.searchBeers();
  }
  
  // Toggles result list to list view
  listResult(): void {
    document.getElementById('resultsWrap').classList.remove('search-grid');
  }
  
  
  // Toggles result list to grid view
  gridResult(): void {
    document.getElementById('resultsWrap').classList.add('search-grid');
  }

}
