import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerUsuarioComponent } from './ver-usuario.component';

describe('VerUsuarioComponent', () => {
  let component: VerUsuarioComponent;
  let fixture: ComponentFixture<VerUsuarioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VerUsuarioComponent]
    });
    fixture = TestBed.createComponent(VerUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
