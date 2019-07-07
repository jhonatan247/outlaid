import { Component, OnInit } from '@angular/core';
import { TransactionService } from 'src/app/services/transaction/transaction.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-comparation',
  templateUrl: './comparation.component.html',
  styleUrls: ['./comparation.component.css']
})
export class ComparationComponent implements OnInit {
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
  public barChartData2 = [{ label: '', data: '' }];

  constructor(transactionService: TransactionService, public router: Router) {
    this.barChartData = transactionService.getComparationTreding();
    this.barChartData2 = transactionService.getComparationTreding2();
  }

  showComparation() {
    this.router.navigate(['comparation']);
  }
  ngOnInit() {}
}
