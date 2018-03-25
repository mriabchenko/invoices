import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InvoiceRoutingModule } from './invoice-routing.module';
import { CreateComponent } from './create/create.component';
import { ListComponent } from './list/list.component';
import { RestTransportService } from './services/transport/rest-transport.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormBuilder } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    InvoiceRoutingModule,
    HttpClientModule,
  ],
  declarations: [CreateComponent, ListComponent],
  providers: [
    RestTransportService,
    FormBuilder,
  ],
})
export class InvoiceModule { }
