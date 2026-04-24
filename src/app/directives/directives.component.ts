import { Component } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent {
  states:string[] = ["telangana","andhra","karnataka", "kerala" ];

  users:any = [
    {name:'ram',age:20},
    {name:'raj',age:23},
    {name:'sham',age:35},
    {name:'jhon',age:37},
  ]

  isShow:boolean= false;




}
