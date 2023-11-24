import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurriculumComponent } from './curriculum.component';
import { beforeEach } from 'node:test';

describe('CurriculumComponent', () => {
  let component: CurriculumComponent;
  let fixture: ComponentFixture<CurriculumComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CurriculumComponent]
    });
    fixture = TestBed.createComponent(CurriculumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

