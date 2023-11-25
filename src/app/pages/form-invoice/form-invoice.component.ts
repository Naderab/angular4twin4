import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Invoice } from 'src/app/core/invoice';

@Component({
  selector: 'app-form-invoice',
  templateUrl: './form-invoice.component.html',
  styleUrls: ['./form-invoice.component.css']
})
export class FormInvoiceComponent implements OnInit,OnChanges {
  @Output() updateInvoice = new EventEmitter<Invoice>();
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes['i'])
    if(this.i!==undefined)
    {
      this.invoice.patchValue({
        discountAmount: this.i.discountAmount,
      billAmount: this.i.billAmount,
      dateBill: this.i.dateBill,
      Status: this.i.Status
      })
    }
  }
  invoice !: FormGroup;
  @Input() i !:Invoice;
  ngOnInit(){
    console.log(this.i)
    this.invoice = new FormGroup({
      discountAmount: new FormControl(''),
      billAmount: new FormControl(''),
      dateBill: new FormControl(''),
      Status: new FormControl('')
    })
  }

  update(){
    this.invoice.value.id = this.i.id
      this.updateInvoice.emit(this.invoice.value);
  }
}
