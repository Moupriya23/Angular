import { Component, OnInit } from '@angular/core';
import { IEmployee } from './employee';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit{

  employeeList: IEmployee [];
  showEdit: boolean;
  constructor() {
    this.employeeList = [];
    this.showEdit = false;
    this.addDemoEmployee();
  }

  addDemoEmployee(){
    this.employeeList = [
      {Dob: '11.11.23', Email: 'demo@mail.com', EmployeeId: 1, FirstName: 'Ruskin', LastName: 'Bond', Salary: 10000},
      {Dob: '12.11.23', Email: 'demo1@mail.com', EmployeeId: 2, FirstName: 'Jasamin', LastName: 'Bond', Salary: 20000},
      {Dob: '13.11.23', Email: 'demo2@mail.com', EmployeeId: 3, FirstName: 'John', LastName: 'Bond', Salary: 30000}
    ]
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties,and the first call to ngOnChanges.
  }
  EditEmp() {
    this.showEdit = true;
  }
  UpdateEmp() {
    this.showEdit = false;
  }
}
