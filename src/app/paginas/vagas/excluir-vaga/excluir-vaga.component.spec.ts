import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExcluirVagaComponent } from './excluir-vaga.component';

describe('ExcluirVagaComponent', () => {
  let component: ExcluirVagaComponent;
  let fixture: ComponentFixture<ExcluirVagaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExcluirVagaComponent]
    });
    fixture = TestBed.createComponent(ExcluirVagaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
