import { Component, OnInit, Input } from '@angular/core';
import { transformDate } from 'src/app/shared/helper';

@Component({
  selector: 'app-order-status',
  templateUrl: './order-status.component.html',
  styleUrls: ['./order-status.component.scss']
})
export class OrderStatusComponent implements OnInit {
  modalPage: number = 1;
  @Input() foodOrders: any[] = [];
  @Input() totalFine!: number;
  @Input() modalId!: string;
  transformDate = transformDate; // Imported method for formatting date
  constructor() { }

  ngOnInit(): void {
  }

}
