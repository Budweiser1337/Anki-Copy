// shared.service.ts
import { Injectable } from '@angular/core';
import { StudyNowComponent } from './study-now/study-now.component';
import { BehaviorSubject } from 'rxjs';


@Injectable({
    providedIn: 'root',
})
export class SharedService {
    studyNowComponent: StudyNowComponent | undefined;
    private learningFactsSubject = new BehaviorSubject<any[]>([]);
    learningFacts$ = this.learningFactsSubject.asObservable();

    constructor() {}

    setStudyNowComponent(instance: StudyNowComponent): void {
        this.studyNowComponent = instance;
    }
    setLearningFacts(learningFacts: any | any[]): void {
        const factsArray = Array.isArray(learningFacts) ? learningFacts : [learningFacts];
        this.learningFactsSubject.next(factsArray);
    }
}
