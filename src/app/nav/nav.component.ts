import { Component } from '@angular/core';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {

    cartCount:number=0;
  constructor(private commonService:CommonService){
    commonService.getCount().subscribe(
      (data:any)=>{
        this.cartCount=data;
      },
    )
  }


}
