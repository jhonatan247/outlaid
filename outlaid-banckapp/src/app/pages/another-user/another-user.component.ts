import { Component, OnInit } from '@angular/core';
import { TransactionService } from 'src/app/services/transaction/transaction.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-another-user',
  templateUrl: './another-user.component.html',
  styleUrls: ['./another-user.component.css']
})
export class AnotherUserComponent implements OnInit {
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

  constructor(transactionService: TransactionService, public router: Router) {
    this.barChartData = transactionService.getAnotherTreding();
  }

  showComparation() {
    this.router.navigate(['comparation']);
  }
  ngOnInit() {}
}
