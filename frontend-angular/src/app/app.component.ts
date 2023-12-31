import { Component, OnInit } from '@angular/core';
import { LessonPackage } from './interface';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Anki - Copy';
  constructor() {
    console.log('AppComponent.constructor()');
  }
  ngOnInit() {
    console.log('AppComponent.ngOnInit()');
  }
  lessonPackage: LessonPackage = {
    title: '',
    description: '',
    category: '',
    level: 1,
    prerequisite: [],
    tags: [],
    copyright: ''
  }
}

