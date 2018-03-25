import { Component, OnInit } from '@angular/core';
import { RestTransportService } from '../services/transport/rest-transport.service';
import { InvoiceInterface } from '../interfaces/invoice.interface';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.sass'],
})
export class ListComponent implements OnInit {

  public invoices: InvoiceInterface[];

  public constructor(private transport: RestTransportService) {
    this.invoices = [];
    this.transport.getInvoices().then((invoices: InvoiceInterface[]) => {
      this.invoices = invoices;
    });
  }

  public ngOnInit() {

  }

}
