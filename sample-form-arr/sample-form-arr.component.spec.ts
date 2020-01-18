import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SampleFormArrComponent } from './sample-form-arr.component';

describe('SampleFormArrComponent', () => {
  let component: SampleFormArrComponent;
  let fixture: ComponentFixture<SampleFormArrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SampleFormArrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SampleFormArrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
