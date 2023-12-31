// quiz-page.component.ts
import { Component, OnDestroy } from '@angular/core';
import { QuizService } from '../quiz.service';
import { Subscription } from 'rxjs';
import { flashcardsMap, courses } from '../content';
import { ActivatedRoute, Router, Params } from '@angular/router';

@Component({
  selector: 'app-quiz-page',
  templateUrl: './quiz-page.component.html',
  styleUrls: ['./quiz-page.component.css']
})
export class QuizPageComponent implements OnDestroy{
  selectedCourse: any;
  flashcards: any[] = []; // An array to store flashcards for the selected course
  currentFlashcardIndex: number = 0;
  private subscription: Subscription;

  courses = courses

  constructor(private quizService: QuizService, private route: ActivatedRoute) {
    // Subscribe to changes in the selectedCourse
    this.subscription = this.quizService.selectedCourse$.subscribe((course) => {
      console.log('Selected Course:', course);
      this.selectedCourse = course;
      // Get the corresponding flashcards for the selected course
      this.flashcards = this.selectedCourse ? flashcardsMap.get(this.selectedCourse.id) || [] : [];
      console.log('Flashcards:', this.flashcards);
      // Reset the currentFlashcardIndex
      this.currentFlashcardIndex = 0;

    });
  }
  onSelectCourse(course: any): void {
    this.quizService.selectCourse(course);
  }

  ngOnInit() {
    // Subscribe to route parameter changes
    this.route.params.subscribe((params) => {
      const courseId = +params['id']; // '+' converts string to number
      // Select the course based on the id
      this.quizService.selectCourse(courses.find((c) => c.id === courseId));
    });
  }
  ngOnDestroy() {
    // Unsubscribe to avoid memory leaks
    this.subscription.unsubscribe();
  }
  onNext() {
    this.currentFlashcardIndex = (this.currentFlashcardIndex + 1) % this.flashcards.length;
  }
  onPrevious() {
    this.currentFlashcardIndex = (this.currentFlashcardIndex - 1) % this.flashcards.length;
  }

}
