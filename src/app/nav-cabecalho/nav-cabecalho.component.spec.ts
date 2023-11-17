import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavCabecalhoComponent } from './nav-cabecalho.component';

describe('NavCabecalhoComponent', () => {
  let component: NavCabecalhoComponent;
  let fixture: ComponentFixture<NavCabecalhoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavCabecalhoComponent]
    });
    fixture = TestBed.createComponent(NavCabecalhoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
