// progress-statistics.component.ts
import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-progress-statistics',
  templateUrl: './progress-statistics.component.html',
  styleUrls: ['./progress-statistics.component.css']
})
export class ProgressStatisticsComponent implements OnInit {
  chartOptions: Highcharts.Options = {};

  constructor() { }

  ngOnInit(): void {
    this.chartOptions = {
      chart: {
        type: 'bar'
      },
      title: {
        text: 'Progress Statistics'
      },
      xAxis: {
        categories: ['Learn Typescript', 'Learn NodeJS', 'Learn HTML', 'Learn Angular']
      },
      yAxis: {
        title: {
          text: 'Completion Percentage'
        }
      },
      series: [{
        type: 'bar',
        name: 'Completion Percentage',
        data: [40, 60, 75, 90]
      }]
    };
  }

    protected readonly Highcharts = Highcharts;
}
