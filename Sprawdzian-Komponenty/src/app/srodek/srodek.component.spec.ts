import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SrodekComponent } from './srodek.component';

describe('SrodekComponent', () => {
  let component: SrodekComponent;
  let fixture: ComponentFixture<SrodekComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SrodekComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SrodekComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
