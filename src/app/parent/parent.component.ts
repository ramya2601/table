import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  public name:string;
  public stringLength:number;
  public flag:boolean;
  employeee:any[];
 
  constructor() {
    
   }

  ngOnInit() {
    this.name='angular';
    this.employeee=[
{
  name:"ramya",id:222
},
{
  name:"sai",id:333
}
    ];
  }
  result(event){
    this.stringLength=event;
  }

}
