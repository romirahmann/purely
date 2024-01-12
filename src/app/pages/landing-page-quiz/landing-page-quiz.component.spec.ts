import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingPageQuizComponent } from './landing-page-quiz.component';

describe('LandingPageQuizComponent', () => {
  let component: LandingPageQuizComponent;
  let fixture: ComponentFixture<LandingPageQuizComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LandingPageQuizComponent]
    });
    fixture = TestBed.createComponent(LandingPageQuizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
