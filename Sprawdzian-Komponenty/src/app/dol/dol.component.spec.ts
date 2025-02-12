import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DolComponent } from './dol.component';

describe('DolComponent', () => {
  let component: DolComponent;
  let fixture: ComponentFixture<DolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DolComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
