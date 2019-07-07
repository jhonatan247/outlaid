import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidemenuHomeComponent } from './sidemenu-home.component';

describe('SidemenuHomeComponent', () => {
  let component: SidemenuHomeComponent;
  let fixture: ComponentFixture<SidemenuHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SidemenuHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidemenuHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
