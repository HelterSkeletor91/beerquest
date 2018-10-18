import { Component, OnInit } from '@angular/core';
import { Category } from '../category';

import { CategoryService } from '../category.service' ;

@Component({
  selector: 'app-beer-categories',
  templateUrl: './beer-categories.component.html',
  styleUrls: ['./beer-categories.component.css']
})
export class BeerCategoriesComponent implements OnInit {
    
    categories: Category[];
    
    constructor(private catService: CategoryService) { }

    ngOnInit() {
        this.getCats();
    }
    
    // Method to fetch categories
    getCats(): void {
        this.catService.getCats().subscribe(cats => this.categories = cats);
    }
    
    // Method to add new categories
    add(name: string): void {
        // Ignore if field value returned with only spaces
        name = name.trim();
        if (!name) { return; }
        // Create the new category
        var newCat = new Category;
        newCat.name = name;
        // Find the next available number, assign it to the end of cat url, and post
        var nextId = this.nextCatId();
        newCat.url = 'http://apichallenge.canpango.com/category/'+nextId+'/';
        this.catService.addCat(newCat)
            .subscribe(cat => {
                this.categories.push(cat);
            });
    }
    
    // Method to find the next available category number
    nextCatId(): number {
        var i = 0;
        // Loop through categories, set 'i' to their 'id', add 1 at the end before returning
        for(var j = 0; j < this.categories.length; j++) {
            if(parseInt(this.categories[j].url.substring(this.categories[j].url.indexOf('y/')+2, this.categories[j].url.length-1)) > i) {
                i = parseInt(this.categories[j].url.substring(this.categories[j].url.indexOf('y/')+2, this.categories[j].url.length-1));
            }
        }
        return i+1;
    }

}
