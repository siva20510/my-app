import { Component } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent {
  country:string = 'india';
  state:string = 'TELANGANA';
  now:any = new Date();
}
