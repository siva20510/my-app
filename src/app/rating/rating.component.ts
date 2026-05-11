import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent {
  
  @Input() rating:number = 0;

  @Output() ratingChange:EventEmitter<number> = new EventEmitter();

  updateRating(rating:number){
    this.rating = rating;
    this.ratingChange.emit(rating); 
  }

}
