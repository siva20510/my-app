import { Component } from '@angular/core';
import { BrowserModule } from "@angular/platform-browser";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent {
  allUsers: any = [
    { id: 1, name: "Akhil", age: 28, salary: 75000, department: "Frontend", isActive: true, rating: 4.5 },
    { id: 2, name: "Ravi", age: 32, salary: 90000, department: "Backend", isActive: false, rating: 4.2 },
    { id: 3, name: "Sneha", age: 26, salary: 65000, department: "UI/UX", isActive: true, rating: 4.8 },
    { id: 4, name: "Kiran", age: 30, salary: 85000, department: "Frontend", isActive: true, rating: 4.1 },
    { id: 5, name: "Divya", age: 27, salary: 70000, department: "QA", isActive: false, rating: 3.9 },
    { id: 6, name: "Arjun", age: 35, salary: 120000, department: "DevOps", isActive: true, rating: 4.7 },
    { id: 7, name: "Pooja", age: 24, salary: 60000, department: "UI/UX", isActive: true, rating: 4.3 },
    { id: 8, name: "Rahul", age: 29, salary: 80000, department: "Backend", isActive: false, rating: 4.0 },
    { id: 9, name: "Meena", age: 31, salary: 95000, department: "QA", isActive: true, rating: 4.6 },
    { id: 10, name: "Vikram", age: 33, salary: 110000, department: "Frontend", isActive: true, rating: 4.4 }
  ];

  users:any = this.allUsers;

  name:string = "";
  age:number = 0;
  salary:number = 0;
  department:string = "";
  rating:number = 0;

  term:string = "";


  create(){
    let user = {
      id: 8888,
      name: this.name,
      age: this.age,
      salary: this.salary,
      department: this.department,
      isActive: true,
      rating: this.rating
    }

    this.users.unshift(user);
  }



  delete(i:number){
    this.users.splice(i,1);
  }

  addBonus(){
    this.users = this.users.map((user:any)=>{
      user.salary = user.salary+2000;
      return user;
    })
  }

  activeUsers(){
    this.users = this.users.filter((user:any)=>user.isActive==true);
  }

  salaryLH(){
    this.users.sort((a:any, b:any)=>a.salary-b.salary);
  }

  totalSalaries(){
    let total = this.users.reduce((agg:number,user:any)=>agg+user.salary,0);
    alert("Total salaires: "+total);
  }

  search(){
    this.users = this.users.filter((user:any)=>user.name.includes(this.term))
  }
}
