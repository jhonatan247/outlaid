import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComparationComponent } from './comparation.component';

describe('ComparationComponent', () => {
  let component: ComparationComponent;
  let fixture: ComponentFixture<ComparationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComparationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComparationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
