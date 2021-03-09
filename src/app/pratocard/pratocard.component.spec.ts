import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PratoCardComponent } from './pratocard.component';

describe('PratoCardComponent', () => {
  let component: PratoCardComponent;
  let fixture: ComponentFixture<PratoCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PratoCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PratoCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
