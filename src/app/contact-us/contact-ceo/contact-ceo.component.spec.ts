import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactCeoComponent } from './contact-ceo.component';

describe('ContactCeoComponent', () => {
  let component: ContactCeoComponent;
  let fixture: ComponentFixture<ContactCeoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactCeoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactCeoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
