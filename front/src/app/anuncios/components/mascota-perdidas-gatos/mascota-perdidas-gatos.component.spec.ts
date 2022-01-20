import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MascotaPerdidasGatosComponent } from './mascota-perdidas-gatos.component';

describe('MascotaPerdidasGatosComponent', () => {
  let component: MascotaPerdidasGatosComponent;
  let fixture: ComponentFixture<MascotaPerdidasGatosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MascotaPerdidasGatosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MascotaPerdidasGatosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
