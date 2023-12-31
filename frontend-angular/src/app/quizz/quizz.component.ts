import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { QuizService } from '../quiz.service';


@Component({
  selector: 'app-quizz',
  templateUrl: './quizz.component.html',
  styleUrls: ['./quizz.component.css'],
})
export class QuizzComponent {
  courses = [
    { id: '1', title: 'Learn TypeScript' },
    { id: '2', title: 'Learn Node.js' },
    { id: '3', title: 'Learn HTML' },
    { id: '4', title: 'Learn Angular' },
  ];

  constructor(private router: Router, private quizService: QuizService) {}

  navigateToFlashcards(courseId: string): void {
    // Navigate to the flashcard page with the selected course ID
    this.router.navigate(['/flashcards', courseId]);
  }
  onSelectCourse(course: any): void {
    this.router.navigate(['/quiz', course.id]);
  }

}
