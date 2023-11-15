import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroComponent } from './cadastro.component';

describe('CadastroComponent', () => {
  let component: CadastroComponent;
  let fixture: ComponentFixture<CadastroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CadastroComponent]
    });
    fixture = TestBed.createComponent(CadastroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('numeroDiasNoMes', () => {
    it('should return 31 for January', () => {
      expect(component.numeroDiasNoMes(2022, 1)).toBe(31);
    });

    it('should return 28 for February in a non-leap year', () => {
      expect(component.numeroDiasNoMes(2021, 2)).toBe(28);
    });

    it('should return 29 for February in a leap year', () => {
      expect(component.numeroDiasNoMes(2020, 2)).toBe(29);
    });

    it('should return 30 for April', () => {
      expect(component.numeroDiasNoMes(2022, 4)).toBe(30);
    });

    it('should return 30 for June', () => {
      expect(component.numeroDiasNoMes(2022, 6)).toBe(30);
    });

    it('should return 30 for September', () => {
      expect(component.numeroDiasNoMes(2022, 9)).toBe(30);
    });

    it('should return 31 for December', () => {
      expect(component.numeroDiasNoMes(2022, 12)).toBe(31);
    });
  });

  describe('atualizarDias', () => {
    it('should update the days array when the month changes', () => {
      component.anoSelecionado = 2022;
      component.mesSelecionado = 2; // February
      component.atualizarDias();
      expect(component.dias.length).toBe(28);
    });

    it('should update the days array when the year changes to a leap year', () => {
      component.anoSelecionado = 2020; // Leap year
      component.mesSelecionado = 2; // February
      component.atualizarDias();
      expect(component.dias.length).toBe(29);
    });

    it('should update the days array when the year changes to a non-leap year', () => {
      component.anoSelecionado = 2021; // Non-leap year
      component.mesSelecionado = 2; // February
      component.atualizarDias();
      expect(component.dias.length).toBe(28);
    });
  });
});