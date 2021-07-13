import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MuertesCovidComponent } from './muertes-covid.component';

describe('MuertesCovidComponent', () => {
  let component: MuertesCovidComponent;
  let fixture: ComponentFixture<MuertesCovidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MuertesCovidComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MuertesCovidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
