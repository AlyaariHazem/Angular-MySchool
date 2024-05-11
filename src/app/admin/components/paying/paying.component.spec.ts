import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PayingComponent } from './paying.component';

describe('PayingComponent', () => {
  let component: PayingComponent;
  let fixture: ComponentFixture<PayingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PayingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PayingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
