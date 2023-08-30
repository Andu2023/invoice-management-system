import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';



@Component({
  selector: 'app-status-stored-material',
  templateUrl: './status-stored-material.component.html',
  styleUrls: ['./status-stored-material.component.css']
})
export class StatusStoredMaterialComponent implements OnInit {
  constructor(){}
  ngOnInit(): void {
    this.RenderChart();
  }
  RenderChart(){
  const myChart =  new Chart("chartId", {
    type: 'pie',
    data: {
       labels: ["HTML", "CSS", "JAVASCRIPT", "CHART.JS", "JQUERY", "BOOTSTRP"],
       datasets: [{
          label: "online tutorial subjects",
          data: [20, 40, 13, 35, 20, 38],
          backgroundColor: ['yellow', 'aqua', 'pink', 'lightgreen', 'gold', 'lightblue'],
          hoverOffset: 5
       }],
    },
    options: {
       responsive: false,
    },
 });
  }

}