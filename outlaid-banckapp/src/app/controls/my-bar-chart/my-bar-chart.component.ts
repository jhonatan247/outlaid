import { TransactionService } from './../../services/transaction/transaction.service';
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
            suggestedMax: 50
          }
        }
      ]
    }
  };
  public barChartLabels = [
    'monday',
    'tuesday',
    'wednesday',
    'thursday',
    'friday',
    'saturday',
    'sunday'
  ];
  public barChartType = 'line';
  public barChartLegend = true;

  public barChartData = [{ label: '', data: '' }];

  constructor(transactionService: TransactionService) {
    this.barChartData = transactionService.getTreding();
  }

  ngOnInit() {}
}
