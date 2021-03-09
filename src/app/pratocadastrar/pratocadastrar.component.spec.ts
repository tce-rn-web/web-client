import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PratoCadastrarComponent } from './pratocadastrar.component';

describe('PratoCadastrarComponent', () => {
  let component: PratoCadastrarComponent;
  let fixture: ComponentFixture<PratoCadastrarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PratoCadastrarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PratoCadastrarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
