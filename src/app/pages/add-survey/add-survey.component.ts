import { Component } from '@angular/core';
import { CardComponent } from '../../components/public/card/card.component';
import { MaterialsModule } from '../../materials/materials.module';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add-survey',
  standalone: true,
  imports: [CardComponent, MaterialsModule, CommonModule],
  templateUrl: './add-survey.component.html',
  styleUrl: './add-survey.component.scss'
})
export class AddSurveyComponent {
  //제목
  title: string = '';

  // 설명
  description: string = '';


  // card 초기화
  cards: any[] = [{
    item_title: '', num_of_answer: 1, item_options: [{ index: 0, option: '' }], required: false
  }];

  // 카드 추가 
  addCard() {
    this.cards.push({
      item_title: '', num_of_answer: 1, item_options: [{ index: 0, option: '' }], required: false
    })
  }

  // 카드 삭제
  removeCard(idx: number) {
    this.cards.splice(idx, 1);
  }

  // 항목 추가
  addItem(idx: number) {
    let next_index = 0
    this.cards[idx].item_options.map((item: any) => { next_index > item ? next_index = item : '' })
    this.cards[idx].item_options.push({ index: next_index, option: `옵션${next_index + 1}` })
  }


  // 항목 삭제
  removeItem(idx: number, item_idx: number) {
    this.cards[idx].item_options.splice(item_idx, 1)
  }


  // 제출
  submit() {
    console.log(this.cards)
  }
}
