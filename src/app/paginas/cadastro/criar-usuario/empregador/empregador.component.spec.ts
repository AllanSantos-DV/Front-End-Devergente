import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpregadorComponent } from './empregador.component';

describe('EmpregadorComponent', () => {
  let component: EmpregadorComponent;
  let fixture: ComponentFixture<EmpregadorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmpregadorComponent]
    });
    fixture = TestBed.createComponent(EmpregadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
