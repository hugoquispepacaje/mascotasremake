import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MascotaPerdidasPerrosComponent } from './mascota-perdidas-perros.component';

describe('MascotaPerdidasPerrosComponent', () => {
  let component: MascotaPerdidasPerrosComponent;
  let fixture: ComponentFixture<MascotaPerdidasPerrosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MascotaPerdidasPerrosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MascotaPerdidasPerrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
