import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionarAnuncioComponent } from './gestionar-anuncio.component';

describe('GestionarAnuncioComponent', () => {
  let component: GestionarAnuncioComponent;
  let fixture: ComponentFixture<GestionarAnuncioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestionarAnuncioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionarAnuncioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
