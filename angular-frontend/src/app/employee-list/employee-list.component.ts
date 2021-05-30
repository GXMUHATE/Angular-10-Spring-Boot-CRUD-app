import { Component, OnInit } from '@angular/core';
import {Employee} from '../employee'
@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  employees: Employee[] | undefined;
  constructor() { }

  ngOnInit(): void {
    this.employees = [{
      "id": 1,
      "firstName": "Graçane",
      "lastName": "Muhate",
      "emailId": "gmuhate@gmail.com"
    },
    {
      "id": 2,
      "firstName": "Jason",
      "lastName": "Statan",
      "emailId": "jstatan@gmail.com"
    }];
  }

}
