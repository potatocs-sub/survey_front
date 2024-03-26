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

  // 설문지 등록
  addSurvey(survey: any) {
    return this.http.post(this.baseUrl + `/survey/add`, survey);
  }

  // 설문지 목록 요청
  getSurveyList() {
    return this.http.get(this.baseUrl + '/survey');
  }

  // 특정 설문지 요청
  getSurvey(_id: string) {
    return this.http.get(this.baseUrl + `/survey/${_id}`);
  }

  // 설문
  survey(_id: string, survey: any) {
    return this.http.post(this.baseUrl + `/survey/${_id}`, survey);
  }
}
