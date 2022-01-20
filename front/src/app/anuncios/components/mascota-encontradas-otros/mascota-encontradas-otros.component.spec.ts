import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MascotaEncontradasOtrosComponent } from './mascota-encontradas-otros.component';

describe('MascotaEncontradasOtrosComponent', () => {
  let component: MascotaEncontradasOtrosComponent;
  let fixture: ComponentFixture<MascotaEncontradasOtrosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MascotaEncontradasOtrosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MascotaEncontradasOtrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
