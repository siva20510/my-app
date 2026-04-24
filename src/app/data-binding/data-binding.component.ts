import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent {

  //providing age
  age:number = 25;
  name:string = "raj";
  address:string = "hyd";

  isInValid:boolean = false;
  phone:string = "+91-"

  submit(){
    alert("submittedd");
  }
}
