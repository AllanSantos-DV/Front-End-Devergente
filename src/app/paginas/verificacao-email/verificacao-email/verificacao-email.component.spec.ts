import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerificacaoEmailComponent } from './verificacao-email.component';

describe('VerificacaoEmailComponent', () => {
  let component: VerificacaoEmailComponent;
  let fixture: ComponentFixture<VerificacaoEmailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VerificacaoEmailComponent]
    });
    fixture = TestBed.createComponent(VerificacaoEmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
