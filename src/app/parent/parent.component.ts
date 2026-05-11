import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {


  updateCount(value:number){
    alert(value);
  }


  
  updateRating(value:number){
    alert(value);
  }

}
