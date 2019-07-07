import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnotherUserComponent } from './another-user.component';

describe('AnotherUserComponent', () => {
  let component: AnotherUserComponent;
  let fixture: ComponentFixture<AnotherUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnotherUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnotherUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
