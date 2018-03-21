import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InvoiceRoutingModule } from './invoice-routing.module';
import { CreateComponent } from './create/create.component';
import { ListComponent } from './list/list.component';

@NgModule({
  imports: [
    CommonModule,
    InvoiceRoutingModule
  ],
  declarations: [CreateComponent, ListComponent]
})
export class InvoiceModule { }
