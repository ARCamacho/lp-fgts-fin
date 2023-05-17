import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DuviComponent } from './duvi.component';

describe('DuviComponent', () => {
  let component: DuviComponent;
  let fixture: ComponentFixture<DuviComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DuviComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DuviComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
