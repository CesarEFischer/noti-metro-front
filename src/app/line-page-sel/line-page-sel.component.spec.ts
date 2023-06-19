import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinePageSelComponent } from './line-page-sel.component';

describe('LinePageSelComponent', () => {
  let component: LinePageSelComponent;
  let fixture: ComponentFixture<LinePageSelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LinePageSelComponent]
    });
    fixture = TestBed.createComponent(LinePageSelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
