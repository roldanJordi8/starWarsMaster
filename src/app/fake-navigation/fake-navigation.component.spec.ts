import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FakeNavigationComponent } from './fake-navigation.component';

describe('FakeNavigationComponent', () => {
  let component: FakeNavigationComponent;
  let fixture: ComponentFixture<FakeNavigationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FakeNavigationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FakeNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
