import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavRodapeComponent } from './nav-rodape.component';

describe('NavRodapeComponent', () => {
  let component: NavRodapeComponent;
  let fixture: ComponentFixture<NavRodapeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavRodapeComponent]
    });
    fixture = TestBed.createComponent(NavRodapeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
