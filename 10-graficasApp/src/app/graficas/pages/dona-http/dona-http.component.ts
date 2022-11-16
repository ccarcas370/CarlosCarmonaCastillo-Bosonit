import { Component, OnInit } from '@angular/core';
import { ChartData, ChartType } from 'chart.js';
import { GraficasService } from '../../services/graficas.service';

@Component({
  selector: 'app-dona-http',
  templateUrl: './dona-http.component.html',
  styles: [
  ]
})
export class DonaHttpComponent implements OnInit {

  public doughnutChartLabels: string[] = [];

  public doughnutChartData: ChartData<'doughnut'> = {
    labels: this.doughnutChartLabels,
    datasets: [
      { data: [] },
    ]
  };
  
  public doughnutChartType: ChartType = 'doughnut';

  constructor(private graficasService: GraficasService) { }

  ngOnInit(): void {

    // this.graficasService.getUsuariosRedesSociales()
    //   .subscribe( data => {
    //     const labels = Object.keys(data);
    //     const valores = Object.values(data);
    //     this.doughnutChartData = {
    //       labels: labels,
    //       datasets: [{data: valores}]
    //     }
    //   });

    this.graficasService.getUsuariosRedesSocialesDividido()
      .subscribe( ({labels, valores}) => {
          this.doughnutChartData = {
            labels: labels,
            datasets: [{data: valores}]
          }
      })
    
  }

}
