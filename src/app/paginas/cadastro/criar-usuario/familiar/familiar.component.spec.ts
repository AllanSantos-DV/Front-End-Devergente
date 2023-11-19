import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FamiliarComponent } from './familiar.component';

describe('FamiliarComponent', () => {
  let component: FamiliarComponent;
  let fixture: ComponentFixture<FamiliarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FamiliarComponent]
    });
    fixture = TestBed.createComponent(FamiliarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
