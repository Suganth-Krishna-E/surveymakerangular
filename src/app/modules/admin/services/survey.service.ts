import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { throwError, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root',
})
export class SurveyService {
  private apiUrl = 'http://localhost:8080/v1/surveydetail'; 
  private apiUrlResponse = 'http://localhost:8080/v1/surveyresponse'; 


  constructor(private http: HttpClient) {}

  publishSurvey(surveyData: surveyDetail): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    const response = this.http.post(`${this.apiUrl}/publish`, surveyData, { headers }).pipe(
      catchError((error) => {
        Swal.fire('Error!', `${error.error}`, 'error');
        return new Observable<any>;
      })
    );

    return response;
  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      Swal.fire('Error!', `🛑 Network error`, 'error');
      return new Observable<any>;
    } else {
      Swal.fire('Error!', `${error.error}`, 'error');
      return new Observable<any>;
    }
  }

  getAllSurveysByAdminId(adminId: string): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    return this.http.get(`${this.apiUrl}/${adminId}`, { headers }).pipe(
      catchError(this.handleError)
    ); 
  }

  getSurveyResponsesBySurveyId(surveyId: string): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    return this.http.get(`${this.apiUrlResponse}/getResponsesBySurveyId/${surveyId}`, { headers }).pipe(
      catchError((error) => {
        Swal.fire('Error!', `${error.error}`, 'error');
        return new Observable<any>;
      })
    );
  }

  getSurveyDetailsBySurveyId(surveyId: string): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    return this.http.get(`${this.apiUrl}/getSurveyById/${surveyId}`, { headers }).pipe(
      catchError(this.handleError)
    );
  }
}


interface surveyDetail {
  title: string;
  description: string;
  questions: questioSurveyDetail[];
}

interface questioSurveyDetail {
  questionNumber: number;
  title: string;
  type: string;
  fileType: string;
  options: string[];
  notes: string;
}
