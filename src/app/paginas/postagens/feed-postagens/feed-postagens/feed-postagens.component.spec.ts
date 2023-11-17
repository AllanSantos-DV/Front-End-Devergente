import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedPostagensComponent } from './feed-postagens.component';

describe('FeedPostagensComponent', () => {
  let component: FeedPostagensComponent;
  let fixture: ComponentFixture<FeedPostagensComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FeedPostagensComponent]
    });
    fixture = TestBed.createComponent(FeedPostagensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
