import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent {
  userForm:FormGroup = new FormGroup({
    name:new FormControl(),
    age : new FormControl(),
    phone : new FormControl(),
    email : new FormControl(),
    address : new FormGroup({
      city : new FormControl(),
      pincode : new FormControl(),
    })
  })

  submit(){
    console.log(this.userForm);
  }

}
