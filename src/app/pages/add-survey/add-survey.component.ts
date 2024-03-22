import { Component } from '@angular/core';
import { CardComponent } from '../../components/public/card/card.component';
import { MaterialsModule } from '../../materials/materials.module';

@Component({
  selector: 'app-add-survey',
  standalone: true,
  imports: [CardComponent, MaterialsModule],
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
    item_title: '', item_options: [{ index: 0, option: '' }], required: false
  }];

  // 카드 추가 
  addCard() {
    this.cards.push({
      item_title: '', item_options: [{ index: 0, option: '' }], required: false
    })
  }

  // 항목 추가
  addItem(idx: number) {

    const item_options = this.cards[idx!].item_options;

    const last_items_index = item_options[item_options.length - 1].index;
    item_options.push({ index: last_items_index, item_title: '', item_options: { option: '' }, required: false })
  }
}
