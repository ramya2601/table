import { Component, OnInit } from '@angular/core';
import { EmployeeservicesService } from '../services/employeeservices.service';
import { ArrayType } from '@angular/compiler';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
employeeDetails:any[];
// employeePosts:any[];
  constructor(private employeeSer: EmployeeservicesService) { }
  

  ngOnInit() {
    this.getAllEmployeeDetails();
    this.getposts();
  }
  getAllEmployeeDetails(){
    this.employeeSer.allEmployeeDetails().subscribe((data) => {
      console.log(data, 'dd');
      this.employeeDetails=data;
    })

  }
  getposts(){
    this.employeeSer.allEmployeePost().subscribe((data)=>{
      console.log(data,'hiii');
      // this.employeePosts=data;
    })
  }
}

