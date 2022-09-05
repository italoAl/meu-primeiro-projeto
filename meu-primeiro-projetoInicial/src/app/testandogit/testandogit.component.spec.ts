import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestandogitComponent } from './testandogit.component';

describe('TestandogitComponent', () => {
  let component: TestandogitComponent;
  let fixture: ComponentFixture<TestandogitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestandogitComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestandogitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
