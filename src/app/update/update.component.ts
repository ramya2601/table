import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../services.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  employeePosts:any[];

  constructor(private employeePost:ServicesService) { }

  ngOnInit() {
    this.allEmployeePosts();
  }
allEmployeePosts(){
  this.employeePost.getAllPosts().subscribe((data)=>
  {
    console.log(data,'ee');
    this.employeePosts=data;

  })
}
}
