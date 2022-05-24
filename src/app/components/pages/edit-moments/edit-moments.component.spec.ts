import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditMomentsComponent } from './edit-moments.component';

describe('EditMomentsComponent', () => {
  let component: EditMomentsComponent;
  let fixture: ComponentFixture<EditMomentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditMomentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditMomentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
