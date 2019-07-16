import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service/service.service';
import * as moment from 'moment';

@Component({
  selector: 'app-dados-component',
  templateUrl: './dados-component.component.html',
  styleUrls: ['./dados-component.component.css']
})

export class DadosComponentComponent implements OnInit {

  category = [
    'Web Server Configuration', 'Certificate Configuration', 'Scan Information',
    'RPC Configuration', 'SSH Configuration', 'Windows Configuration',
  ];

  dados: any = [];
  selected: {startDate: moment.Moment, endDate: moment.Moment};
  constructor( private service: ServiceService) { }

  ngOnInit() {
    this.listaDados();
  }

  listaDados() {
    return this.service.get()
      .subscribe((data: {}) => {
        this.dados = data;
      });
  }

}
