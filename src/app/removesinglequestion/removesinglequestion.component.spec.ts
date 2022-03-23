import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemovesinglequestionComponent } from './removesinglequestion.component';

describe('RemovesinglequestionComponent', () => {
  let component: RemovesinglequestionComponent;
  let fixture: ComponentFixture<RemovesinglequestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RemovesinglequestionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RemovesinglequestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
