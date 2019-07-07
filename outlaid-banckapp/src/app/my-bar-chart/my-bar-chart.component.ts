import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-bar-chart',
  templateUrl: './my-bar-chart.component.html',
  styleUrls: ['./my-bar-chart.component.css']
})
export class MyBarChartComponent implements OnInit {
  public barChartOptions = {
    scales: {
      yAxes: [
        {
          ticks: {
            suggestedMin: 50,
            suggestedMax: 100
          }
        }
      ]
    }
  };

  public barChartLabels = ['January', 'February', 'March', 'April'];
  public barChartType = 'line';
  public barChartLegend = true;

  public barChartData = [
    {
      label: 'First dataset',
      data: [0, 20, 40, 50]
    }
  ];

  constructor() {}

  ngOnInit() {}
}
