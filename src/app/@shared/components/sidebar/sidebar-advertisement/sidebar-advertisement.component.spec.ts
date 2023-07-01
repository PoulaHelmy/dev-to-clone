import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarAdvertisementComponent } from './sidebar-advertisement.component';

describe('SidebarAdvertisementComponent', () => {
  let component: SidebarAdvertisementComponent;
  let fixture: ComponentFixture<SidebarAdvertisementComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [SidebarAdvertisementComponent]
    });
    fixture = TestBed.createComponent(SidebarAdvertisementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
