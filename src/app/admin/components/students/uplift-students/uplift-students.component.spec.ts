import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpliftStudentsComponent } from './uplift-students.component';

describe('UpliftStudentsComponent', () => {
  let component: UpliftStudentsComponent;
  let fixture: ComponentFixture<UpliftStudentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpliftStudentsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UpliftStudentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
