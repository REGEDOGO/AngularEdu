import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoraComponent } from './gora.component';

describe('GoraComponent', () => {
  let component: GoraComponent;
  let fixture: ComponentFixture<GoraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GoraComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GoraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
