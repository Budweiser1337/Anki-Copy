import { Component } from '@angular/core';
import { ApiService } from "src/app/api.service"

@Component({
  selector: 'app-lesson-search-page',
  templateUrl: './lesson-search-page.component.html',
  styleUrls: ['./lesson-search-page.component.css'],
  providers: [ApiService],
})
export class LessonSearchPageComponent {
  searchMode: string = 'basic';
  title: string = '';
  advancedTitle: string = '';
  searchResults: any[] = [];
  constructor(private apiService: ApiService) {}
  searchLessons() {
    console.log('Search Mode:', this.searchMode);
    console.log('Title:', this.title);
    console.log('Advanced Title:', this.advancedTitle);
    this.apiService.searchLessons({
      searchMode: this.searchMode,
      title: this.title,
      // Pass other input fields as needed
    }).subscribe({
      next: (results: any) => {
        // Handle the search results (data) and update the frontend
        this.searchResults = results;
        console.log('Search results:', this.searchResults);
        // Update your component properties or UI with the fetched data
      },
      error: (error) => {
        console.error('Error during search:', error);
        // Handle errors appropriately
      }}
    );
  }

}
