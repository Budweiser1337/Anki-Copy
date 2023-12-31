import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class QuizService {
  private selectedCourseSubject = new BehaviorSubject<any>(null);
  selectedCourse$: Observable<any> = this.selectedCourseSubject.asObservable();

  selectCourse(course: any): void {
    this.selectedCourseSubject.next(course);
  }
}
