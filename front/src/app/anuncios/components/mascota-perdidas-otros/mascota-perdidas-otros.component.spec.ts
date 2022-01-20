import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MascotaPerdidasOtrosComponent } from './mascota-perdidas-otros.component';

describe('MascotaPerdidasOtrosComponent', () => {
  let component: MascotaPerdidasOtrosComponent;
  let fixture: ComponentFixture<MascotaPerdidasOtrosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MascotaPerdidasOtrosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MascotaPerdidasOtrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
