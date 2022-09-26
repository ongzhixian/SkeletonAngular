import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PriceLadderComponent } from './price-ladder.component';

describe('PriceLadderComponent', () => {
  let component: PriceLadderComponent;
  let fixture: ComponentFixture<PriceLadderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PriceLadderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PriceLadderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
