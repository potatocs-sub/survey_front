import { Component } from '@angular/core';
import { SurveyService } from '../../services/survey/survey.service';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../../components/public/card/card.component';
import { MaterialsModule } from '../../materials/materials.module';

@Component({
  selector: 'app-servey',
  standalone: true,
  imports: [RouterModule, CommonModule, CardComponent, MaterialsModule],
  templateUrl: './survey.component.html',
  styleUrl: './survey.component.scss'
})
export class SurveyComponent {
  survey_id: string = '';
  survey: any = {};
  result: any = {};

  constructor(private surveyService: SurveyService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe((res: any) => {

      this.survey_id = res._id;
      this.surveyService.getSurvey(res._id).subscribe((res: any) => {
        this.survey = res;
        this.survey.cards.map((card: any) => {
          this.result[`${card.index}`] = [];
        })
      })
    })
  }

  updateResult(card_index: string, option_index: string, e: any) {
    if (e.checked) {
      this.result[`${card_index}`].push(option_index)
    } else {
      this.result[`${card_index}`] = this.result[`${card_index}`].filter((card: any) => card != option_index)
    }

    // console.log(this.result)
  }



  submit() {
    for (let card of this.survey.cards) {
      if (card.required && this.result[card.index].length == 0) {
        window.alert('필수 항목 미입력: ' + card.item_title)
        return;
      }
    }

    this.surveyService.survey(this.survey_id, this.result).subscribe((res: any) => {
      if (res.status) {
        window.alert("응답이 기록되었습니다.")
        this.router.navigate(['/'])
      }
    })
  }

  back() {
    this.router.navigate(['/'])
  }

}
