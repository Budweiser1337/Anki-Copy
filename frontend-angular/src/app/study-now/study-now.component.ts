// study-now.component.ts
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-study-now',
  templateUrl: './study-now.component.html',
  styleUrls: ['./study-now.component.css']
})
export class StudyNowComponent implements OnInit {

  courses: any[] = [];
  flashcards: any[] = [];
  learningFacts: any[] = [];

  constructor(private router: Router, private http: HttpClient, private sharedService: SharedService) { }

  ngOnInit(): void {
    // Fetch the courses from your server when the component initializes
    this.fetchCourses();
    this.sharedService.setStudyNowComponent(this);
  }

  someMethod(): void {
      // Implementation of the method
      console.log('Some method in StudyNowComponent');
  }

  fetchCourses(): void {
    // Replace 'http://localhost:3000' with the actual URL of your Express server
    const serverUrl = 'http://localhost:3000';

    // Fetch the courses from the server
    this.http.get<any[]>(`${serverUrl}/api/package-summaries`).subscribe(
      (courses) => {
        this.courses = courses;
      },
      (error) => {
        console.error('Error fetching courses:', error);
      }
    );
  }

    startStudy(courseId: number): void {
        this.router.navigate(['/learning-facts', courseId]);

        // Fetch learning facts for the selected course
        this.fetchLearningFacts(courseId);
    }

    fetchLearningFacts(courseId: number): void {
        const serverUrl = 'http://localhost:3000';

        // Generate a random learning fact ID
        const randomFactId = Math.floor(Math.random() * 6) + 1;

        this.http.get<any[]>(`${serverUrl}/api/package/${courseId}/fact/${randomFactId}`).subscribe(
            (learningFact) => {
                this.learningFacts = learningFact;
                this.sharedService.setLearningFacts(learningFact);
            },
            (error) => {
                console.error('Error fetching learning fact:', error);
            }
        );
    }
}
