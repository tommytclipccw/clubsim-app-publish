import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QrLinkListviewComponent } from './qr-link-listview.component';

describe('QrLinkListviewComponent', () => {
  let component: QrLinkListviewComponent;
  let fixture: ComponentFixture<QrLinkListviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QrLinkListviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QrLinkListviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
