import { Component, OnInit, Input } from '@angular/core';
import { maskPhoneNumber } from 'src/app/shared/helper';
@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.scss']
})
export class EmployeeDetailsComponent implements OnInit {
  @Input() heading!: string;
  @Input() user: any;
  @Input() defaultImage!: string;
  @Input() loading!: boolean;
  @Input() modalId!: string;
  maskPhoneNumber = maskPhoneNumber; // Imported method for masking user's phone number
  constructor() { }

  ngOnInit(): void {
  }

}
