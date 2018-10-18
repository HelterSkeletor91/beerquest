import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchBeersComponent } from './search-beers.component';

describe('SearchBeersComponent', () => {
  let component: SearchBeersComponent;
  let fixture: ComponentFixture<SearchBeersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchBeersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchBeersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
