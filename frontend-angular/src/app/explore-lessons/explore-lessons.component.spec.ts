import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExploreLessonsComponent } from './explore-lessons.component';

describe('ExploreLessonsComponent', () => {
  let component: ExploreLessonsComponent;
  let fixture: ComponentFixture<ExploreLessonsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExploreLessonsComponent]
    });
    fixture = TestBed.createComponent(ExploreLessonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
