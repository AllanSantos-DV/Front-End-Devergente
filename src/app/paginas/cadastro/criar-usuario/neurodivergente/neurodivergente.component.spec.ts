import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NeurodivergenteComponent } from './neurodivergente.component';

describe('NeurodivergenteComponent', () => {
  let component: NeurodivergenteComponent;
  let fixture: ComponentFixture<NeurodivergenteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NeurodivergenteComponent]
    });
    fixture = TestBed.createComponent(NeurodivergenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
