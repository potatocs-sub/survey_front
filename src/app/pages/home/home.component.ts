import { Component } from '@angular/core';
import { CardComponent } from '../../components/public/card/card.component';
import { SurveyService } from '../../services/survey/survey.service';
import { ThisReceiver } from '@angular/compiler';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CardComponent, RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  surveys: Array<any> = [];

  constructor(private surveyService: SurveyService, private router: Router) { }

  ngOnInit() {
    this.surveyService.getSurveyList().subscribe((res: any) => {
      this.surveys = res
    })
  }

  // 설문조사로 이동
  goToSurvey(_id: string) {
    this.router.navigate([`survey/${_id}`])
  }
}
