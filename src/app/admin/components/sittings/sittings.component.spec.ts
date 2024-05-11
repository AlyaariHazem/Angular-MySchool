import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SittingsComponent } from './sittings.component';

describe('SittingsComponent', () => {
  let component: SittingsComponent;
  let fixture: ComponentFixture<SittingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SittingsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SittingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
