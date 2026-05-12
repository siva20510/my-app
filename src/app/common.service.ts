import { Injectable } from '@angular/core';
import { BehaviorSubject, count } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor() { }

  count:number=0;
  //subject create
  countSub$:BehaviorSubject<number> = new BehaviorSubject(0);

  //set
  setCount(){
    
  this.count++;
  this.countSub$.next(this.count);

  }

  //get 
  getCount(){

    return this.countSub$.asObservable();
  }

}
