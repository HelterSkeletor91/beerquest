import { Component, OnInit, Input } from '@angular/core';

import { Beer } from '../beer';

import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { BeerService } from '../beer.service';

@Component({
  selector: 'app-beers-details',
  templateUrl: './beers-details.component.html',
  styleUrls: ['./beers-details.component.css']
})
export class BeersDetailsComponent implements OnInit {
  @Input() beer: Beer;

  constructor(
    private route: ActivatedRoute,
    private beerService: BeerService,
    private location: Location
  ) { }

  ngOnInit() {
    this.getBeer();
  }
  
  // Method to get the beer for the current page, using id in URI
  getBeer(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.beerService.getBeer(id).subscribe(beer => this.beer = beer);
  }
  
  // Method to go back once
  goBack(): void {
    this.location.back();
  }
  
  // Method to toggle 'edit mode' on
  editMode(): void {
    document.getElementById('infoDiv').classList.add('hideWrap');
    document.getElementById('editDiv').classList.remove('hideWrap');
  }
  
  // Method to save changed to edited beer
  saveBeer(name,ibu,abv,style,loc,cal,url,created,cat): void {
    
    name = name.trim();
    if (!name) { return; }
    
    ibu = ibu.trim();
    if (!ibu) { return; }
    
    abv = abv.trim();
    if (!abv) { return; }
    
    style = style.trim();
    if (!style) { return; }
    
    loc = loc.trim();
    if (!loc) { return; }
    
    cat = cat.trim();
    if (!cat) { return; }
    
    cal = cal.trim();
    if (!cal) { return; }
    
    url = url.trim();
    if (!url) { return; }
    
    // Set up beer object using values (edited or not) from the edit form
    var newBeer = new Beer;
    newBeer.name = name;
    newBeer.ibu = parseInt(ibu);
    newBeer.calories = parseInt(cal);
    newBeer.abv = parseFloat(abv).toFixed(2).toString();
    newBeer.style = style;
    newBeer.brewery_location = loc;
    newBeer.category = cat;
    newBeer.url = url;
    newBeer.created_on = created;
    
    // Call the update method in beer.service, update current beer page info
    this.beerService.updateBeer(newBeer, newBeer.url).subscribe(function(): void {
        const id = this.route.snapshot.paramMap.get('id');
        this.beerService.getBeer(id).subscribe(beer => this.beer = beer);
    });
    
    // Call the cancel method to toggle back out of edit mode
    this.cancelEdit();
  }
  
  // Method to cancel out of edit mode
  cancelEdit(): void {
    document.getElementById('editDiv').classList.add('hideWrap');
    document.getElementById('infoDiv').classList.remove('hideWrap');
  }

}
