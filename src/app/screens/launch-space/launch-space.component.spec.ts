import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LaunchSpaceComponent } from './launch-space.component';

describe('LaunchSpaceComponent', () => {
  let component: LaunchSpaceComponent;
  let fixture: ComponentFixture<LaunchSpaceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LaunchSpaceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LaunchSpaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
