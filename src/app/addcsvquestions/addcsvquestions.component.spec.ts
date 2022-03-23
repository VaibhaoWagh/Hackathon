import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddcsvquestionsComponent } from './addcsvquestions.component';

describe('AddcsvquestionsComponent', () => {
  let component: AddcsvquestionsComponent;
  let fixture: ComponentFixture<AddcsvquestionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddcsvquestionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddcsvquestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
