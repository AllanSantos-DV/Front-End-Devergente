import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostagemComponent } from './postagem.component';

describe('PostagemComponent', () => {
  let component: PostagemComponent;
  let fixture: ComponentFixture<PostagemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PostagemComponent]
    });
    fixture = TestBed.createComponent(PostagemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
