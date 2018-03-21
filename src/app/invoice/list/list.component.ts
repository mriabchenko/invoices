import { Component, OnInit } from '@angular/core';
import { RestTransportService } from '../services/transport/rest-transport.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.sass'],
})
export class ListComponent implements OnInit {

  public constructor(private transport: RestTransportService) {
  }

  public ngOnInit() {
    this.transport.getCustomers().then(data => {
      console.log(data);
    });
  }

}
