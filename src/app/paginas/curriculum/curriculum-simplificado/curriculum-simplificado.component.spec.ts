import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurriculumSimplificadoComponent } from './curriculum-simplificado.component';

describe('CurriculumSimplificadoComponent', () => {
  let component: CurriculumSimplificadoComponent;
  let fixture: ComponentFixture<CurriculumSimplificadoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CurriculumSimplificadoComponent]
    });
    fixture = TestBed.createComponent(CurriculumSimplificadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
