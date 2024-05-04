import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PayingStudentsComponent } from './paying-students.component';

describe('PayingStudentsComponent', () => {
  let component: PayingStudentsComponent;
  let fixture: ComponentFixture<PayingStudentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PayingStudentsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PayingStudentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
