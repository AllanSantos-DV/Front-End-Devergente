import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExcluirCurriculumComponent } from './excluir-curriculum.component';

describe('ExcluirCurriculumComponent', () => {
  let component: ExcluirCurriculumComponent;
  let fixture: ComponentFixture<ExcluirCurriculumComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExcluirCurriculumComponent]
    });
    fixture = TestBed.createComponent(ExcluirCurriculumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
