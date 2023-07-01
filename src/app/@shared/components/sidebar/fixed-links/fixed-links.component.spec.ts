import {ComponentFixture, TestBed} from '@angular/core/testing';

import {FixedLinksComponent} from './fixed-links.component';

describe('SidebarComponent', () => {
  let component: FixedLinksComponent;
  let fixture: ComponentFixture<FixedLinksComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [FixedLinksComponent]
    });
    fixture = TestBed.createComponent(FixedLinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
