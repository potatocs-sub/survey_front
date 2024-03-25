import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServeyComponent } from './survey.component';

describe('ServeyComponent', () => {
  let component: ServeyComponent;
  let fixture: ComponentFixture<ServeyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServeyComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(ServeyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
