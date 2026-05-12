import { Component } from '@angular/core';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent {
  constructor(private commonService:CommonService){}

  add(){

    this.commonService.setCount();
  }
}
