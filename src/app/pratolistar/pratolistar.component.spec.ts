import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PratoListarComponent } from './pratolistar.component';

describe('PratoListarComponent', () => {
  let component: PratoListarComponent;
  let fixture: ComponentFixture<PratoListarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PratoListarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PratoListarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
