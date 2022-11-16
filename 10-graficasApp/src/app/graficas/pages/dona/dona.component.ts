import { Component } from '@angular/core';
import { ChartData, ChartType, Color } from 'chart.js';

@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styles: [
  ]
})
export class DonaComponent {

  public doughnutChartLabels: string[] = [ 'Download Sales', 'In-Store Sales', 'Mail-Order Sales', 'Other' ];

  public doughnutChartData: ChartData<'doughnut'> = {
    labels: this.doughnutChartLabels,
    datasets: [
      { data: [ 350, 450, 100, 150 ], backgroundColor: [ '#FAD70D', '#DE7C0B', '#F5A101', '#1DDE0B' ], hoverBackgroundColor: 'blue' },
    ]
  };
  
  public doughnutChartType: ChartType = 'doughnut';

}
