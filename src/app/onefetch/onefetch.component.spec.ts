import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnefetchComponent } from './onefetch.component';

describe('OnefetchComponent', () => {
  let component: OnefetchComponent;
  let fixture: ComponentFixture<OnefetchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OnefetchComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OnefetchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
