import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KnockoutCardComponent } from './knockout-card.component';

describe('KnockoutCardComponent', () => {
  let component: KnockoutCardComponent;
  let fixture: ComponentFixture<KnockoutCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KnockoutCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KnockoutCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
