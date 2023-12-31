// flashcard-edit-form.component.ts
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-flashcard-edit-form',
  templateUrl: './flashcard-edit-form.component.html',
  styleUrls: ['./flashcard-edit-form.component.css'],
})
export class FlashcardEditFormComponent implements OnInit {
  @Input() lessonId!: number; // Assuming you receive lessonId as an input
  @Input() flashcard: any; // Assuming you receive the flashcard as an input

  flashcardForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.flashcardForm = this.formBuilder.group({
      question: [this.flashcard.question, Validators.required],
      answer: [this.flashcard.answer, Validators.required],
    });
  }

  onSubmit(): void {
    if (this.flashcardForm.valid) {


      this.initForm();
    }
  }


}
