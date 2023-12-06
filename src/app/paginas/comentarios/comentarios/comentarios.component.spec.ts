import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComentariosComponent } from './comentarios.component';

describe('ComentarioComponent', () => {
  let component: ComentariosComponent;
  let fixture: ComponentFixture<ComentariosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComentariosComponent]
    });
    fixture = TestBed.createComponent(ComentariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
