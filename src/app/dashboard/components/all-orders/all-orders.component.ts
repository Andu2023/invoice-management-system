import { Component, OnInit } from '@angular/core';
import { Order } from '../../model/model';

@Component({
  selector: 'app-all-orders',
  templateUrl: './all-orders.component.html',
  styleUrls: ['./all-orders.component.css']
})
export class AllOrdersComponent  implements OnInit {
  listOfOrders: Order[] = [];
  ordersToDisplay: Order[] = [];
  columns: string[] = [
    'id',
    'userid',
    'name',
    'bookid',
    'book',
    'date',
    'returned',
  ];

  constructor() {}

  ngOnInit(): void {
    // this.api.getAllOrders().subscribe({
    //   next: (res: Order[]) => {
    //     this.listOfOrders = res;
    //     this.ordersToDisplay = this.listOfOrders;
    //   },
    //   error: (err: any) => console.log(err),
    // });
  }

  filter(value: string) {
    if (value === 'all') {
      this.ordersToDisplay = this.listOfOrders.filter((value) => value);
    } else if (value === 'pen') {
      this.ordersToDisplay = this.listOfOrders.filter(
        (value) => value.returned == false
      );
    } else {
      this.ordersToDisplay = this.listOfOrders.filter(
        (value) => value.returned
      );
    }
  }
}
