import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { CreateInvoiceFormModel } from './models/create-invoice-form.model';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.sass'],
})
export class CreateComponent implements OnInit {
  public createInvoiceForm: CreateInvoiceFormModel;
  public constructor(private fb: FormBuilder) {
    this.createInvoiceForm = new CreateInvoiceFormModel(this.fb);
  }

  public ngOnInit() {
  }

}
