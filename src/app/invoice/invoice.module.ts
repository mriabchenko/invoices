import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InvoiceRoutingModule } from './invoice-routing.module';
import { CreateComponent } from './create/create.component';
import { ListComponent } from './list/list.component';
import { RestTransportService } from './services/transport/rest-transport.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    InvoiceRoutingModule,
  ],
  declarations: [CreateComponent, ListComponent],
  providers: [
    RestTransportService,
  ],
})
export class InvoiceModule { }
