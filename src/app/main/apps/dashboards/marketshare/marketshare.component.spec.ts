import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarketshareComponent } from './marketshare.component';

describe('MarketshareComponent', () => {
  let component: MarketshareComponent;
  let fixture: ComponentFixture<MarketshareComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarketshareComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarketshareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
