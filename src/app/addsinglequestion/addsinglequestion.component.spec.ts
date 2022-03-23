import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddsinglequestionComponent } from './addsinglequestion.component';

describe('AddsinglequestionComponent', () => {
  let component: AddsinglequestionComponent;
  let fixture: ComponentFixture<AddsinglequestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddsinglequestionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddsinglequestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
