import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MaterialsModule } from '../../materials/materials.module';
import { SurveyService } from '../../services/survey/survey.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CardComponent } from '../../components/public/card/card.component';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-result',
  standalone: true,
  imports: [CommonModule, MaterialsModule, CardComponent, BaseChartDirective],
  templateUrl: './result.component.html',
  styleUrl: './result.component.scss'
})
export class ResultComponent {

  survey_id: string = '';
  survey: any = {};
  result: any = {};
  organized_result: any = {};

  constructor(private surveyService: SurveyService, private route: ActivatedRoute, private router: Router) { }


  chartOptions: any = {
    indexAxis: 'y',

  }

  ngOnInit() {
    this.route.params.subscribe((res: any) => {
      this.survey_id = res._id;
      this.surveyService.getSurvey(res._id).subscribe((res: any) => {
        this.survey = res;
        console.log(this.survey)
        this.survey.cards.map((card: any) => {
          const data: any = { labels: [], index: [], data: [] };
          card.item_options.map((option: any) => {
            data.labels.push(option.option);
            data.index.push(option.index);
            data.data.push(0);
          })
          this.organized_result[`${card.index}`] = data;

        })
        this.surveyService.getSurveyResult(res._id).subscribe((res: any) => {
          this.result = res;

          this.result.map((r: any) => {
            const entries = Object.entries(r.result);

            entries.map((r2: any) => {
              r2[1].map((r3: any) => {

                const result = this.organized_result[`${r2[0]}`]

                result.data[result.index.indexOf(r3)]++;
              })
            })
          })
        })
      })
    })
  }


  setData(index: number) {
    const result = this.organized_result[index]

    return {
      labels: result.labels,
      datasets: [{
        data: result.data,
      }],

    }
  }
}
