import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriarCurriculumComponent } from './criar-curriculum.component';

describe('CriarCurriculumComponent', () => {
  let component: CriarCurriculumComponent;
  let fixture: ComponentFixture<CriarCurriculumComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CriarCurriculumComponent]
    });
    fixture = TestBed.createComponent(CriarCurriculumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
