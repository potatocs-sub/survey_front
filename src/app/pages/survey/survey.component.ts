import { Component } from '@angular/core';
import { SurveyService } from '../../services/survey/survey.service';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-servey',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './survey.component.html',
  styleUrl: './survey.component.scss'
})
export class SurveyComponent {
  survey_id: string = '';
  constructor(private surveyService: SurveyService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe((res: any) => {

      this.survey_id = res._id;
      this.surveyService.getSurvey(res._id).subscribe((res) => {
        console.log(res);
      })
    })

  }
}
