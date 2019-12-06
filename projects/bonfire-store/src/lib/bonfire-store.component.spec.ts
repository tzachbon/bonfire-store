import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BonfireStoreComponent } from './bonfire-store.component';

describe('BonfireStoreComponent', () => {
  let component: BonfireStoreComponent;
  let fixture: ComponentFixture<BonfireStoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BonfireStoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BonfireStoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
