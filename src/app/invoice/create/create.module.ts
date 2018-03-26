import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateRoutingModule } from './create-routing.module';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RestTransportService } from '../../services/transport/rest-transport.service';
import { CreateComponent } from './create.component';

@NgModule({
  imports: [
    CommonModule,
    CreateRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [
    CreateComponent,
  ],
  providers: [
    RestTransportService,
    FormBuilder,
  ],
})
export class CreateModule { }
