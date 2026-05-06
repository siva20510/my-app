import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  constructor(private router:Router){}
  logout(){
    //to go to login
    this.router.navigateByUrl("/login");
    // remove token
    localStorage.removeItem("token");
  }

}
