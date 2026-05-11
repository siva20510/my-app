import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {

  @Input() count:number = 0;

  //create event
  @Output() countChange:EventEmitter<number> = new EventEmitter();

  //emit the event
  send(){
                  //emit
    this.countChange.emit(101);
  }

}
