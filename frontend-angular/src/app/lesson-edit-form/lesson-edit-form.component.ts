import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {UserSettingsService} from "../user-settings.service";
import LessonPackage from "../interface";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-lesson-edit-form',
  templateUrl: './lesson-edit-form.component.html',
  styleUrls: ['./lesson-edit-form.component.css']
})
export class LessonEditFormComponent {
  lessonPackage: any = {
    title: '',
    description: '',
    category: '',
    level: '',
    prerequisite: [],
    tags: [],
    copyright: ''
  };
  onClickSubmit() {
    console.log('form values to save to server', this.model);
  }
  model: LessonPackage = {
    title: '',
    description: '',
    category: '',
    level: 1,
    prerequisite: [],
    tags: [],
    copyright: ''
  };
  lessonForm: FormGroup;
  constructor(formBuilder: FormBuilder) {
    this.lessonForm = formBuilder.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      category: [''],
      level: [''],
      prerequisite: [''],
      tags: [''],
      copyright: ['']
    });
  }
  onSubmit() {
    if (this.lessonForm.valid) {
      const formData = this.lessonForm.value;
      console.log('Form data submitted:', formData);
    } else {
      console.log('Form is invalid. Please check the required fields.');
    }
  }

  /**
  constructor(private router: Router, private userSettingsService: UserSettingsService) {}

  submitForm() {
    this.userSettingsService.lastLessonId = 1234;
    this.router.navigate(['lesson-list']).then(res => {})
  }
   */
}


