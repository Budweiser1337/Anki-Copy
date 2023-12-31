import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LessonEditFormComponent} from "./lesson-edit-form/lesson-edit-form.component";
import {LessonListPageComponent} from "./lesson-list-page/lesson-list-page.component";
import {LessonDetailPageComponent} from "./lesson-detail-page/lesson-detail-page.component";
import {TestPage1Component} from "./test-page1/test-page1.component";
import {LessonSearchPageComponent} from "./lesson-search-page/lesson-search-page.component";
import { StudyNowComponent } from './study-now/study-now.component';
import { FlashcardsComponent } from './flashcards/flashcards.component';
import { LearningFactsComponent } from './learning-facts/learning-facts.component';
import { HomepageComponent } from './homepage/homepage.component';
import { GlossaryComponent } from './glossary/glossary.component';
import { DocumentationComponent } from './documentation/documentation.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { SettingsComponent } from './settings/settings.component';
import { ImportComponent } from './import/import.component';
import { NewComponent } from './new/new.component';
import { ExportComponent } from './export/export.component';
import { ExploreLessonsComponent } from './explore-lessons/explore-lessons.component';
import { QuizzComponent } from './quizz/quizz.component';
import { QuizPageComponent } from './quiz-page/quiz-page.component';
import {ProgressStatisticsComponent} from "./progress-statistics/progress-statistics.component";
import { FlashcardEditFormComponent } from './flashcard-edit-form/flashcard-edit-form.component';


const routes: Routes = [
  { path:'lesson-edit-form', component: LessonEditFormComponent },
  { path:'lesson-list', component: LessonListPageComponent },
  { path: 'flashcard-edit/:id', component: FlashcardEditFormComponent },
  { path:'lesson/:id', component: LessonDetailPageComponent },
  { path:'test-page1', component: TestPage1Component },
  { path: 'lesson-search-page', component: LessonSearchPageComponent },
  { path: 'study-now', component: StudyNowComponent },
  { path: 'flashcards/:id', component: FlashcardsComponent },
  { path: 'learning-facts/:id', component: LearningFactsComponent },
  { path: '', component: HomepageComponent },
  { path: 'glossary', component: GlossaryComponent },
  { path: 'documentation', component: DocumentationComponent },
  { path: 'about', component: AboutComponent },
  { path: 'login', component: LoginComponent },
  { path: 'logout', component: LogoutComponent },
  { path: 'settings', component: SettingsComponent },
  { path: 'import', component: ImportComponent },
  { path: 'new', component: NewComponent },
  { path: 'export', component: ExportComponent },
  { path: 'explore-lessons', component: ExploreLessonsComponent },
  { path: 'quizz', component: QuizzComponent },
  { path: 'quiz-page', component: QuizPageComponent },
  { path: 'quiz/:id', component: QuizPageComponent },
  { path: 'progress', component: ProgressStatisticsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
