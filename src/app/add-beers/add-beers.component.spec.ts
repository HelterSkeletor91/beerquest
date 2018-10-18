import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBeersComponent } from './add-beers.component';

describe('AddBeersComponent', () => {
  let component: AddBeersComponent;
  let fixture: ComponentFixture<AddBeersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddBeersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddBeersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
