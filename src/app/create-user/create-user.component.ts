import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';

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
    }),

    cards : new FormArray([])
  })

  get cardFormArray(){
    return this.userForm.get('cards') as FormArray;
  }
  addCard(){
    this.cardFormArray.push(
      new FormGroup({
        number : new FormControl(),
        name : new FormControl(),
        cvv : new FormControl(),
      })
    )

  }
  deleteCard(i:number){
    this.cardFormArray.removeAt(i);
  }

  submit(){
    console.log(this.userForm);
  }

}
