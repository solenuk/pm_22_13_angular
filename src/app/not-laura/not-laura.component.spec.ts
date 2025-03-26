import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotLauraComponent } from './not-laura.component';

describe('NotLauraComponent', () => {
  let component: NotLauraComponent;
  let fixture: ComponentFixture<NotLauraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NotLauraComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotLauraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
