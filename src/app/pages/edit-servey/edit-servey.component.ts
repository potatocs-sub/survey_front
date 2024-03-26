import { Component } from '@angular/core';
import { SurveyService } from '../../services/survey/survey.service';
import { CdkDrag, CdkDragDrop, CdkDropList, moveItemInArray } from '@angular/cdk/drag-drop';
import { CommonModule } from '@angular/common';
import { MaterialsModule } from '../../materials/materials.module';
import { CardComponent } from '../../components/public/card/card.component';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-servey',
  standalone: true,
  imports: [CardComponent, MaterialsModule, CommonModule, CdkDropList, CdkDrag],
  templateUrl: './edit-servey.component.html',
  styleUrl: './edit-servey.component.scss'
})
export class EditServeyComponent {
  survey_id: string = '';
  //제목
  title: string = '';

  // 설명
  description: string = '';


  // card 초기화
  cards: any[] = [{
    index: 1, item_title: '', num_of_answer: 1, item_options: [{ index: 1, option: 'option 1' }], required: false
  }];



  constructor(private surveyService: SurveyService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe((res: any) => {

      this.survey_id = res._id;
      this.surveyService.getSurvey(res._id).subscribe((res: any) => {
        console.log(res)
        this.title = res.title;
        this.description = res.description;
        this.cards = res.cards;
        // this.survey = res;
        // this.survey.cards.map((card: any) => {
        //   this.result[`${card.index}`] = [];
        // })
      })
    })
  }

  // 카드 추가 
  addCard() {
    let next_index = 0;
    this.cards.map((card) => { next_index < card.index ? next_index = card.index : '' })
    this.cards.push({
      index: next_index + 1, item_title: '', num_of_answer: 1, item_options: [{ index: 1, option: 'option 1' }], required: false
    })
  }

  // 카드 삭제
  removeCard(idx: number) {
    this.cards.splice(idx, 1);
  }

  // 항목 추가
  addItem(idx: number) {
    let next_index = 0
    this.cards[idx].item_options.map((item: any) => { next_index < item.index ? next_index = item.index : '' })
    this.cards[idx].item_options.push({ index: next_index + 1, option: `option ${next_index + 1}` })
  }


  // 항목 삭제
  removeItem(idx: number, item_idx: number) {
    this.cards[idx].item_options.splice(item_idx, 1)
  }


  // card drop
  cardDrop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.cards, event.previousIndex, event.currentIndex);
  }


  itemDrop(event: CdkDragDrop<string[]>, idx: number) {
    moveItemInArray(this.cards[idx].item_options, event.previousIndex, event.currentIndex);
  }

  // 제출
  submit() {
    console.log(this.title, this.description, this.cards)
    this.surveyService.editSurvey(this.survey_id, { title: this.title, description: this.description, cards: this.cards }).subscribe((res: any) => {
      if (res.status) {
        window.alert('설문지가 수정되었습니다.')
        this.router.navigate(['/'])
      }
    })
  }
}
