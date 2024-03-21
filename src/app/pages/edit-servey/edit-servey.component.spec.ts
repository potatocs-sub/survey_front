import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditServeyComponent } from './edit-servey.component';

describe('EditServeyComponent', () => {
  let component: EditServeyComponent;
  let fixture: ComponentFixture<EditServeyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditServeyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditServeyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
