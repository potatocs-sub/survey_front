import { Component } from '@angular/core';
import { CardComponent } from '../../components/public/card/card.component';
import { SurveyService } from '../../services/survey/survey.service';
import { ThisReceiver } from '@angular/compiler';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  surveys: Array<any> = [];

  constructor(private surveyService: SurveyService) { }

  ngOnInit() {
    this.surveyService.getSurveyList().subscribe((res: any) => {
      this.surveys = res
    })
  }
}
