import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Beer } from './beer';

@Injectable({
  providedIn: 'root'
})
export class BeerService {
  // Set urls for the beers and searching endpoints
  private beerUrl = 'http://apichallenge.canpango.com/beers/';
  private searchUrl = 'http://apichallenge.canpango.com/beers/search/';

  constructor(
    private http: HttpClient,
  ) { }
  
  
  // Method to get all beers
  getBeers(): Observable<Beer[]> {
    return this.http.get<Beer[]>(this.beerUrl)
  }
  
  // Method to get individual beers. based on the 'id' in their url
  getBeer(id: string): Observable<Beer> {
    const url = `http://apichallenge.canpango.com/beers/${id}`;
    return this.http.get<Beer>(url);
  }
  
  // Method to add a new beer
  addBeer(beer: Beer): Observable<Beer> {
    return this.http.post<Beer>(this.beerUrl, beer);
  }
  
  // Method to edit beers
  updateBeer(beer: Beer, url: string): Observable<any> {
    return this.http.put<Beer>(url, beer);
  }
  
  // Method to get all objects at the search endpoint (assuming they are all beers)
  getSearch(): Observable<Beer[]> {
    return this.http.get<Beer[]>(this.searchUrl);
  }
}