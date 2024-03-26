import { Component } from '@angular/core';
import { CardComponent } from '../../components/public/card/card.component';
import { SurveyService } from '../../services/survey/survey.service';
import { ThisReceiver } from '@angular/compiler';
import { Router, RouterModule } from '@angular/router';
import { MaterialsModule } from '../../materials/materials.module';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CardComponent, RouterModule, MaterialsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  surveys: Array<any> = [];

  constructor(private surveyService: SurveyService, private router: Router) { }

  ngOnInit() {
    this.getSurveyList();
  }

  // 설문조사로 이동
  goToSurvey(_id: string) {
    this.router.navigate([`survey/${_id}`])
  }

  goToEdit(_id: string) {
    this.router.navigate([`edit_survey/${_id}`])
  }


  getSurveyList() {
    this.surveyService.getSurveyList().subscribe((res: any) => {
      this.surveys = res
    })
  }

  // 설문지 삭제
  Delete(_id: string) {
    this.surveyService.deleteSurvey(_id).subscribe((res: any) => {
      console.log(res);
      if (res.status) {
        window.alert('설문이 삭제되었습니다.')
        this.getSurveyList();
      }
    })
  }
}
