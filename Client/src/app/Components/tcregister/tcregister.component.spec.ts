import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TCRegisterComponent } from './tcregister.component';

describe('TCRegisterComponent', () => {
  let component: TCRegisterComponent;
  let fixture: ComponentFixture<TCRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TCRegisterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TCRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
