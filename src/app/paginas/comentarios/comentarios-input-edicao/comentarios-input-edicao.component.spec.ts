import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComentariosInputEdicaoComponent } from './comentarios-input-edicao.component';

describe('ComentariosInputEdicaoComponent', () => {
  let component: ComentariosInputEdicaoComponent;
  let fixture: ComponentFixture<ComentariosInputEdicaoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComentariosInputEdicaoComponent]
    });
    fixture = TestBed.createComponent(ComentariosInputEdicaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
