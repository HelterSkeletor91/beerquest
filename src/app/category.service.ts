import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Category } from './category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  
  // Set default category url endpoint for future use
  private catsUrl = 'http://apichallenge.canpango.com/categories/';
  
  constructor(
    private http: HttpClient,
  ) { }
  
  // Method to get all categories
  getCats(): Observable<Category[]> {
    return this.http.get<Category[]>(this.catsUrl)
  }
  
  // Method to get specific category, based on id at the end of category url
  getCat(id: string): Observable<Category> {
    const url = `http://apichallenge.canpango.com/category/${id}/`;
    return this.http.get<Category>(url)
  }
  
  // Method to add a new category
  addCat (cat: Category): Observable<Category> {
    return this.http.post<Category>(this.catsUrl, cat);
  }
}
