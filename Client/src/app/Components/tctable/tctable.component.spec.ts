import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TCTableComponent } from './tctable.component';

describe('TCTableComponent', () => {
  let component: TCTableComponent;
  let fixture: ComponentFixture<TCTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TCTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TCTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
