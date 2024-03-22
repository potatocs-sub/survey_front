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
  explain: string = '';


  // card 초기화
  cards: any[] = [{
    item_title: '', item_options: [{ option: '' }], required: false
  }];

  // 카드 추가 
  addCard() {
    this.cards.push({
      item_title: '', item_options: [{ option: '' }], required: false
    })
  }

  // 항목 추가
  addItem(idx: number) {

    this.cards[idx].item_options.push({ option: `옵션${this.cards[idx].item_options.length + 1}` })
  }


  // 항목 삭제
  removeItem(idx: number, item_idx: number) {
    this.cards[idx].item_options.splice(item_idx, 1)
  }



  submit() {
    console.log(this.cards)
  }
}
