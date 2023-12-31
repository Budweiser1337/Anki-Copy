import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ChartModule } from 'angular-highcharts';
import { HighchartsChartModule } from 'highcharts-angular';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { LessonEditFormComponent } from './lesson-edit-form/lesson-edit-form.component';
import { LessonSearchPageComponent } from './lesson-search-page/lesson-search-page.component';
import { MenuNavBarComponent } from './menu-nav-bar/menu-nav-bar.component';
import { LessonListPageComponent } from './lesson-list-page/lesson-list-page.component';
import { LessonDetailPageComponent } from './lesson-detail-page/lesson-detail-page.component';
import { TestPage1Component } from './test-page1/test-page1.component';
import { NumberDisplayComponent } from './number-display/number-display.component';
import { NumberStepsComponent } from './number-steps/number-steps.component';
import { NumberEditComponent } from './number-edit/number-edit.component';
import {ReactiveFormsModule} from "@angular/forms";
import { HttpClientModule } from '@angular/common/http';
import { StudyNowComponent } from './study-now/study-now.component';
import { FlashcardsComponent } from './flashcards/flashcards.component';
import { LearningFactsComponent } from './learning-facts/learning-facts.component';
import { SharedService } from './shared.service';
import { HomepageComponent } from './homepage/homepage.component';
import { GlossaryComponent } from './glossary/glossary.component';
import { DocumentationComponent } from './documentation/documentation.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { SettingsComponent } from './settings/settings.component';
import { ExploreLessonsComponent } from './explore-lessons/explore-lessons.component';
import { ImportComponent } from './import/import.component';
import { NewComponent } from './new/new.component';
import { ExportComponent } from './export/export.component';
import { QuizzComponent } from './quizz/quizz.component';
import { QuizPageComponent } from './quiz-page/quiz-page.component';
import { ProgressStatisticsComponent } from './progress-statistics/progress-statistics.component';
import { FlashcardEditFormComponent } from './flashcard-edit-form/flashcard-edit-form.component';


@NgModule({
  declarations: [
    AppComponent,
    FlashcardEditFormComponent,
    LessonEditFormComponent,
    LessonSearchPageComponent,
    MenuNavBarComponent,
    LessonListPageComponent,
    LessonDetailPageComponent,
    TestPage1Component,
    NumberDisplayComponent,
    NumberStepsComponent,
    NumberEditComponent,
    StudyNowComponent,
    FlashcardsComponent,
    LearningFactsComponent,
    HomepageComponent,
    GlossaryComponent,
    DocumentationComponent,
    AboutComponent,
    LoginComponent,
    LogoutComponent,
    SettingsComponent,
    ExploreLessonsComponent,
    ImportComponent,
    NewComponent,
    ExportComponent,
    QuizzComponent,
    QuizPageComponent,
    ProgressStatisticsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ChartModule,
    HighchartsChartModule,
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
