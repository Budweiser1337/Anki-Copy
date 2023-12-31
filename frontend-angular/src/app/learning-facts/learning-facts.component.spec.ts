import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LearningFactsComponent } from './learning-facts.component';

describe('LearningFactsComponent', () => {
  let component: LearningFactsComponent;
  let fixture: ComponentFixture<LearningFactsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LearningFactsComponent]
    });
    fixture = TestBed.createComponent(LearningFactsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
