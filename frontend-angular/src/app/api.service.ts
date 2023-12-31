import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private apiUrl = 'http://localhost:3000/api';

  constructor(private http: HttpClient) {}

  getLearningPackages(): Observable<any> {
    return this.http.get(`${this.apiUrl}/package`);
  }

  getLearningPackageById(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/package/${id}`);
  }

  createLearningPackage(data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/package`, data);
  }

  searchLessons(params: any): Observable<any> {
    // Adjust the URL and method based on your API design
    return this.http.get(`${this.apiUrl}/package/3`);
  }

}
