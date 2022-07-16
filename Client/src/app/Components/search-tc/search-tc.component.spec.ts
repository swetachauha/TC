import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchTCComponent } from './search-tc.component';

describe('SearchTCComponent', () => {
  let component: SearchTCComponent;
  let fixture: ComponentFixture<SearchTCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchTCComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchTCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
