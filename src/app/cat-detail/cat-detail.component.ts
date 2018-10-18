import { Component, OnInit, Input } from '@angular/core';
import { Category } from '../category';

import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { CategoryService }  from '../category.service';

@Component({
  selector: 'app-cat-detail',
  templateUrl: './cat-detail.component.html',
  styleUrls: ['./cat-detail.component.css']
})
export class CatDetailComponent implements OnInit {
  @Input() category: Category;

  constructor(
    private route: ActivatedRoute,
    private catService: CategoryService,
    private location: Location
  ) { }

  ngOnInit() {
    this.getCat();
  }
  
  // Method to get current category, using 'id' in the current URI
  getCat(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.catService.getCat(id).subscribe(cat => this.category = cat);
  }
  
  // Method to go back once
  goBack(): void {
    this.location.back();
  }
  
  // Method to toggle list view on
  listResult(): void {
    document.getElementById('catDetails').classList.remove('search-grid');
  }
  
  // Method to toggle grid view on
  gridResult(): void {
    document.getElementById('catDetails').classList.add('search-grid');
  }

}
