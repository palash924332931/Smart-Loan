import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NormalRegistrationComponent } from './normal-registration.component';

describe('NormalRegistrationComponent', () => {
  let component: NormalRegistrationComponent;
  let fixture: ComponentFixture<NormalRegistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NormalRegistrationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NormalRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
