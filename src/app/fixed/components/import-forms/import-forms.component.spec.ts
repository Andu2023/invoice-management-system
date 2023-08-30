import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportFormsComponent } from './import-forms.component';

describe('ImportFormsComponent', () => {
  let component: ImportFormsComponent;
  let fixture: ComponentFixture<ImportFormsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ImportFormsComponent]
    });
    fixture = TestBed.createComponent(ImportFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
