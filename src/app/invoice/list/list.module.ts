import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListRoutingModule } from './list-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { RestTransportService } from '../../services/transport/rest-transport.service';
import { ListComponent } from './list.component';

@NgModule({
  imports: [
    CommonModule,
    ListRoutingModule,
    HttpClientModule,
  ],
  declarations: [
    ListComponent,
  ],
  providers: [
    RestTransportService,
  ],
})
export class ListModule { }
