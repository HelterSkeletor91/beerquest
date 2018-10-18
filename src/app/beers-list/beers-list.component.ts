import { Component, OnInit, Input } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Beer } from '../beer';

import { BeerService } from '../beer.service';

@Component({
  selector: 'app-beers-list',
  templateUrl: './beers-list.component.html',
  styleUrls: ['./beers-list.component.css']
})
export class BeersListComponent implements OnInit {

  beers: Beer[];

  constructor(
    private beerService: BeerService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit() {
    this.getBeers();
  }
  
  // Method to get all beers, using beer service
  getBeers(): void {
    this.beerService.getBeers().subscribe(beers => this.beers = beers);
  }

}
