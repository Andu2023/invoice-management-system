import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-returned-material',
  templateUrl: './returned-material.component.html',
  styleUrls: ['./returned-material.component.css']
})
export class ReturnedMaterialComponent implements OnInit {
  constructor(){}
  ngOnInit(): void {
    this.RenderChart();
  }
  RenderChart(){
    

   const ctx =  new Chart("chartId", {
      type: 'bar',
      data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
          label: '# of Votes',
          data: [12, 19, 3, 5, 2, 3],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
}
}