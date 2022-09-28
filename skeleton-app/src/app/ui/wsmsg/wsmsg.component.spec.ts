import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WsmsgComponent } from './wsmsg.component';

describe('WsmsgComponent', () => {
  let component: WsmsgComponent;
  let fixture: ComponentFixture<WsmsgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WsmsgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WsmsgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
