import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeezerLogoComponent } from './deezer-logo.component';

describe('DeezerLogoComponent', () => {
  let component: DeezerLogoComponent;
  let fixture: ComponentFixture<DeezerLogoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeezerLogoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeezerLogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
