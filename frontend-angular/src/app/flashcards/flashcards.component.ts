import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-flashcard',
  templateUrl: './flashcards.component.html',
  styleUrls: ['./flashcards.component.css'],
})
export class FlashcardsComponent {
  @Input() question: string = '';
  @Input() answer: string = '';

  isFlipped: boolean = false;

  flipCard() {
    this.isFlipped = !this.isFlipped;
  }
}
