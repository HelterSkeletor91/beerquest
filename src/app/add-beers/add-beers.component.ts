import { Component, OnInit, Input } from '@angular/core';

import { Beer } from '../beer';
import { BeerService } from '../beer.service';

import { Category } from '../category';
import { CategoryService } from '../category.service' ;

@Component({
  selector: 'app-add-beers',
  templateUrl: './add-beers.component.html',
  styleUrls: ['./add-beers.component.css']
})
export class AddBeersComponent implements OnInit {
  beer: Beer;
  
  beers: Beer[];
  cats: Category[];

  constructor(
    private beerService: BeerService,
    private catService: CategoryService
  ) { }

  ngOnInit() {
    this.getBeers();
    this.getCats();
  }
  
  getBeers(): void {
    this.beerService.getBeers().subscribe(beers => this.beers = beers);
  }
  
  getCats(): void {
    this.catService.getCats().subscribe(cats => this.cats = cats);
  }
  
  add(name,ibu,cal,abv,style,loc,cat): void {
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
    
    var newBeer = new Beer;
    newBeer.name = name;
    newBeer.ibu = parseInt(ibu);
    newBeer.calories = parseInt(cal);
    newBeer.abv = parseFloat(abv).toFixed(2).toString();
    newBeer.style = style;
    newBeer.brewery_location = loc;
    newBeer.category = 'http://apichallenge.canpango.com/category/'+cat+'/';
    
    var nextId = this.nextBeerId();
    newBeer.url = 'http://apichallenge.canpango.com/beers/'+nextId+'/';
    
    newBeer.created_on = new Date().toISOString();
    
    this.beerService.addBeer(newBeer).subscribe(beer => {
        this.beers.push(beer);
    });
  }
  
  nextBeerId(): number {
    var i = 0;
    
    for(var j = 0; j < this.beers.length; j++) {
        if(parseInt(this.beers[j].url.substring(this.beers[j].url.indexOf('rs/')+3, this.beers[j].url.length-1)) > i) {
            i = parseInt(this.beers[j].url.substring(this.beers[j].url.indexOf('rs/')+3, this.beers[j].url.length-1));
        }
    }
    return i+1;
    
  }

}
