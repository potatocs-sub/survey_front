import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SurveyService {
  private baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  // add survey
  addSurvey(survey: any) {
    return this.http.post(this.baseUrl + `/survey/add`, survey).pipe(
      tap((res: any) => {
        console.log(res);
      })
    )
  }
}
