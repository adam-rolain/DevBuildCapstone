import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarsRoverListComponent } from './mars-rover-list.component';

describe('MarsRoverListComponent', () => {
  let component: MarsRoverListComponent;
  let fixture: ComponentFixture<MarsRoverListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarsRoverListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MarsRoverListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
