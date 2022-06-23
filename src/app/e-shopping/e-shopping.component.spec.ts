import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EShoppingComponent } from './e-shopping.component';

describe('EShoppingComponent', () => {
  let component: EShoppingComponent;
  let fixture: ComponentFixture<EShoppingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EShoppingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EShoppingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
