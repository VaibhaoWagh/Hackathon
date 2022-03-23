import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchstudentsComponent } from './searchstudents.component';

describe('SearchstudentsComponent', () => {
  let component: SearchstudentsComponent;
  let fixture: ComponentFixture<SearchstudentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchstudentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchstudentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
