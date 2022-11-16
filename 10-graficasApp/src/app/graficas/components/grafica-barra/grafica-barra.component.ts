import { Component, Input, OnInit } from '@angular/core';
import { ChartConfiguration, ChartData, ChartType } from 'chart.js';

@Component({
  selector: 'app-grafica-barra',
  templateUrl: './grafica-barra.component.html',
  styles: [
  ]
})
export class GraficaBarraComponent implements OnInit {

  @Input() horizontal: boolean = false;

  public barChartOptions: ChartConfiguration['options'] = {
    responsive: true,
  };

  public barChartType: ChartType = 'bar';
   
  @Input() public barChartData: ChartData<'bar'> = {
    labels: [],
    datasets: [],
  };

  constructor() { }

  ngOnInit(): void {
    if(this.horizontal) {
      this.barChartType = 'line';
    }
  }

}
