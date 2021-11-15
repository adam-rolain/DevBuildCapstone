import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignUpOrLoginComponent } from './sign-up-or-login.component';

describe('SignUpOrLoginComponent', () => {
  let component: SignUpOrLoginComponent;
  let fixture: ComponentFixture<SignUpOrLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignUpOrLoginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SignUpOrLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
