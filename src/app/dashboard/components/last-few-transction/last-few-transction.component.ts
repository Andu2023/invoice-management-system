import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-last-few-transction',
  templateUrl: './last-few-transction.component.html',
  styleUrls: ['./last-few-transction.component.css']
})
export class LastFewTransctionComponent implements OnInit {

  transactions = [
    {
      id: 1,
      title: "Ryzen 5 Processor",
      price: "$299",
      shop: "Tech Pro",
      location: "East Hartford",
      status: "pending",
    },
    {
      id: 2,
      title: "Denver Blackcode",
      price: "$7.89",
      shop: "Pick the best",
      location: "Miamisburg",
      status: "shipped",
    },
    {
      id: 3,
      title: "Nike Shoes",
      price: "$69",
      shop: "Quality Leathers",
      location: "Phoenix",
      status: "confirmed",
    }
  ];
  ngOnInit(): void {
    
  }
}
