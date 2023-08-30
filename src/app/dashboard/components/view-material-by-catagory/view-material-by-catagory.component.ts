import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-view-material-by-catagory',
  templateUrl: './view-material-by-catagory.component.html',
  styleUrls: ['./view-material-by-catagory.component.css']
})
export class ViewMaterialByCatagoryComponent implements OnInit {
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