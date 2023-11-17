import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormReactiveUserComponent } from './form-reactive-user.component';

describe('FormReactiveUserComponent', () => {
  let component: FormReactiveUserComponent;
  let fixture: ComponentFixture<FormReactiveUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormReactiveUserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormReactiveUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
