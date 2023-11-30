import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComentariosInputComponent } from './comentarios-input.component';

describe('ComentariosInputComponent', () => {
  let component: ComentariosInputComponent;
  let fixture: ComponentFixture<ComentariosInputComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComentariosInputComponent]
    });
    fixture = TestBed.createComponent(ComentariosInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
