import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarMedicamentoComponent } from './registrar-medicamento.component';

describe('RegistrarMedicamentoComponent', () => {
  let component: RegistrarMedicamentoComponent;
  let fixture: ComponentFixture<RegistrarMedicamentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrarMedicamentoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrarMedicamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
