import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Input() myName:string;
  myname1:any[];
  @Output() mylength=new EventEmitter<number>();
  public flag:boolean;

  constructor() { }

  ngOnInit() {
    this. myname1=[{name:'rr',id:12},{name:'ww',id:11}];
  }
  calc(){
    var length=this.myName.length;
    console.log('length is',length);
    this.mylength.emit(length);
  }
 
}
