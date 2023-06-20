import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableLineasComponent } from './tableLineas.component';

describe('TableLineasComponent', () => {
  let component: TableLineasComponent;
  let fixture: ComponentFixture<TableLineasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TableLineasComponent]
    });
    fixture = TestBed.createComponent(TableLineasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
