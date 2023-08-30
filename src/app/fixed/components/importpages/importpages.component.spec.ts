import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportpagesComponent } from './importpages.component';

describe('ImportpagesComponent', () => {
  let component: ImportpagesComponent;
  let fixture: ComponentFixture<ImportpagesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ImportpagesComponent]
    });
    fixture = TestBed.createComponent(ImportpagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
