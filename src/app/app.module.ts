import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { appStateReducer } from './store/redusers/invoices.reduser';
import { EffectsModule } from '@ngrx/effects';
import { InvoicesEffects } from './store/effects/invoices.effects';
import { RestTransportService } from './invoice/services/transport/rest-transport.service';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({state: appStateReducer}),
    EffectsModule.forRoot([InvoicesEffects]),
    StoreDevtoolsModule.instrument({
      maxAge: 10,
    }),
  ],
  providers: [
    RestTransportService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
