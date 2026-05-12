import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactCeoComponent } from './contact-ceo/contact-ceo.component';
import { ContactSalesComponent } from './contact-sales/contact-sales.component';



@NgModule({
  declarations: [
    ContactCeoComponent,
    ContactSalesComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ContactUsModule { }
