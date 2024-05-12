import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ToastrModule } from 'ngx-toastr';
import { NewStudentsComponent } from './new-students.component';

describe('NewStudentsComponent', () => {
  let component: NewStudentsComponent;
  let fixture: ComponentFixture<NewStudentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        ToastrModule.forRoot(),
      ],
      providers: [
        { provide: 'InjectionToken ToastConfig', useValue: { toastClass: 'my-custom-toast' } },
      ],
      declarations: [NewStudentsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(NewStudentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});