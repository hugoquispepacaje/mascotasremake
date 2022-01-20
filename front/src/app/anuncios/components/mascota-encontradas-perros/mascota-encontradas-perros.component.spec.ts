import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MascotaEncontradasPerrosComponent } from './mascota-encontradas-perros.component';

describe('MascotaEncontradasPerrosComponent', () => {
  let component: MascotaEncontradasPerrosComponent;
  let fixture: ComponentFixture<MascotaEncontradasPerrosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MascotaEncontradasPerrosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MascotaEncontradasPerrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
