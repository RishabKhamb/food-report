import { Component, OnInit } from '@angular/core';
import { FoodOrderService } from 'src/app/services/food-order.service';

@Component({
  selector: 'app-food-status',
  templateUrl: './food-status.component.html',
  styleUrls: ['./food-status.component.scss']
})
export class FoodStatusComponent implements OnInit {
  loading: boolean = true;
  defaultImage: string = "/assets/profile.png";
  month: number = 11;
  foodOrders: any[] = [];
  user: any = null;
  totalFine: number = 0;

  constructor(private foodOrderService: FoodOrderService) { }

  ngOnInit(): void {
    this.fetchFoodOrders();
  }

  // For fetching user details and food report details
  fetchFoodOrders(): void {
    this.loading = true;
    this.foodOrderService.getFoodOrders(this.month).subscribe({
      next: (response) => {
        this.user = response.user;
        console.log(this.user);
        this.foodOrders = response.reports;
        this.calculateFine();
      },
      error: (error) => {
        console.error('Error fetching food orders:', error);
      },
      complete: () => {
        this.loading = false;
      }
    });
  }

  // Method for calculating fine
  calculateFine(): void {
    this.totalFine = this.foodOrders.reduce((acc, report) => {
      let optIns = report.opt_ins;

      let fineForDay = (optIns.breakfast === 'Pending' ? 100 : 0) +
        (optIns.lunch === 'Pending' ? 100 : 0) +
        (optIns.dinner === 'Pending' ? 100 : 0);

      return acc + fineForDay;
    }, 0);
  }

}
