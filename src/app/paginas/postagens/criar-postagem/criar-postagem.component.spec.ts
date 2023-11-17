import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriarPostagemComponent } from './criar-postagem.component';

describe('CriarPostagemComponent', () => {
  let component: CriarPostagemComponent;
  let fixture: ComponentFixture<CriarPostagemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CriarPostagemComponent]
    });
    fixture = TestBed.createComponent(CriarPostagemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
