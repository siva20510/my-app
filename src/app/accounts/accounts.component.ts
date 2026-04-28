import { Component } from '@angular/core';
import { AccountsService } from '../accounts.service';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.css']
})
export class AccountsComponent {
  Accounts:any=[];
  constructor(private AccountsService:AccountsService){
    AccountsService.getAccounts().subscribe(
      (data:any) =>{
        this.Accounts = data;
      },
      (err:any) =>{
        alert("Internal server error");
      }
    )
  }
}
