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
    return this.http.post(this.baseUrl + `/survey/add`, survey);
  }

  // get survey
  getSurveyList() {
    return this.http.get(this.baseUrl + '/survey');
  }


  getSurvey(_id: string) {
    return this.http.get(this.baseUrl + `/survey/${_id}`);
  }
}
