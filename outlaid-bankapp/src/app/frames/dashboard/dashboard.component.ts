import { Component, OnInit } from '@angular/core';

const data = {
  chart: {
    caption: 'Reach of Social Media Platforms amoung youth',
    yaxisname: '% of youth on this platform',
    subcaption: '2012-2016',
    showhovereffect: '1',
    numbersuffix: '%',
    drawcrossline: '1',
    plottooltext: '<b>$dataValue</b> of youth were on $seriesName',
    theme: 'fusion'
  },
  categories: [
    {
      category: [
        {
          label: '2012'
        },
        {
          label: '2013'
        },
        {
          label: '2014'
        },
        {
          label: '2015'
        },
        {
          label: '2016'
        }
      ]
    }
  ],
  dataset: [
    {
      seriesname: 'Facebook',
      data: [
        {
          value: '62'
        },
        {
          value: '64'
        },
        {
          value: '64'
        },
        {
          value: '66'
        },
        {
          value: '78'
        }
      ]
    },
    {
      seriesname: 'Instagram',
      data: [
        {
          value: '16'
        },
        {
          value: '28'
        },
        {
          value: '34'
        },
        {
          value: '42'
        },
        {
          value: '54'
        }
      ]
    },
    {
      seriesname: 'LinkedIn',
      data: [
        {
          value: '20'
        },
        {
          value: '22'
        },
        {
          value: '27'
        },
        {
          value: '22'
        },
        {
          value: '29'
        }
      ]
    },
    {
      seriesname: 'Twitter',
      data: [
        {
          value: '18'
        },
        {
          value: '19'
        },
        {
          value: '21'
        },
        {
          value: '21'
        },
        {
          value: '24'
        }
      ]
    }
  ]
};
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.sass']
})
export class DashboardComponent implements OnInit {
  width = 600;
  height = 400;
  type = 'msline';
  dataFormat = 'json';
  dataSource = data;

  constructor() {}

  ngOnInit() {}
}

export class AppComponent {
  width = 600;
  height = 400;
  type = 'msline';
  dataFormat = 'json';
  dataSource = data;
}
