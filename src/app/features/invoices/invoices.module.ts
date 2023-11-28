import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InvoicesRoutingModule } from './invoices-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { InvoicesComponent } from './invoices/invoices.component';
import { ListInvoicesComponent } from './list-invoices/list-invoices.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { FormInvoiceComponent } from './form-invoice/form-invoice.component';



@NgModule({
  declarations: [
    InvoicesComponent,
    ListInvoicesComponent,
    InvoiceComponent,
    FormInvoiceComponent
  ],
  imports: [
    CommonModule,
    InvoicesRoutingModule,
    ReactiveFormsModule
  ]
})
export class InvoicesModule { }
