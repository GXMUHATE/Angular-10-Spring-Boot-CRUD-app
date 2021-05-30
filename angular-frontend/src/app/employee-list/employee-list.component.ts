import { Component, OnInit } from '@angular/core';
import {Employee} from '../employee'
import {EmployeeService} from '../employee.service'
@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  employees: Employee[] | undefined;
  constructor(private employeeService: EmployeeService) { }

  ngOnInit(): void {
   this.getEmployees();
  }

  private getEmployees(){
    this.employeeService.getEmployeeList().subscribe(data => {
      this.employees = data;
    });
  } 

}
