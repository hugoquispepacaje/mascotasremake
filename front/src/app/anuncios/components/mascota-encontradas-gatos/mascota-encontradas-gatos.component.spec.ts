import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MascotaEncontradasGatosComponent } from './mascota-encontradas-gatos.component';

describe('MascotaEncontradasGatosComponent', () => {
  let component: MascotaEncontradasGatosComponent;
  let fixture: ComponentFixture<MascotaEncontradasGatosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MascotaEncontradasGatosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MascotaEncontradasGatosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
