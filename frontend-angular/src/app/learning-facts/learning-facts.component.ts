// learning-facts.component.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SharedService } from '../shared.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-learning-facts',
  templateUrl: './learning-facts.component.html',
  styleUrls: ['./learning-facts.component.css'],
})
export class LearningFactsComponent implements OnInit {
  courseId!: number;
  factId!: number;
  learningFacts: any[] = [];

  constructor(private route: ActivatedRoute, private http: HttpClient, private sharedService: SharedService) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.courseId = +params['id'];
      this.factId = +params['factId']; // Add this line to get factId

      console.log('Course ID:', this.courseId);
      console.log('Fact ID:', this.factId);

      // Fetch learning facts for the specified course and fact
      this.fetchLearningFacts();
    });


    // Subscribe to changes in learning facts
    this.sharedService.learningFacts$.subscribe((learningFacts) => {
      console.log('Received learning facts:', learningFacts);

      // Ensure that learningFacts is an array before assigning
      if (Array.isArray(learningFacts)) {
        console.log('Assigning learning facts:', learningFacts);
        this.learningFacts = learningFacts;
        // Optionally, you can display a random learning fact here
        // For example: this.displayRandomLearningFact();
      }
    });
  }

  fetchLearningFacts(): void {
  }

  displayRandomLearningFact(): void {
    // Logic to display a random learning fact
    const randomIndex = Math.floor(Math.random() * this.learningFacts.length);
    const randomFact = this.learningFacts[randomIndex];
    console.log('Random Learning Fact:', randomFact);
  }

}
