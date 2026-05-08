import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent {
  userForm:FormGroup = new FormGroup({
    name:new FormControl("",[Validators.required,Validators.minLength(3),Validators.maxLength(10)]),
    age : new FormControl("",[Validators.required,Validators.min(1),Validators.max(100)]),
    phone : new FormControl("",[Validators.required,Validators.min(1000000000),Validators.max(9999999999)]),
    email : new FormControl("",[Validators.required]),
    address : new FormGroup({
      city : new FormControl("",[Validators.required]),
      pincode : new FormControl("",[Validators.required,Validators.min(100000),Validators.max(999999)]),
    }),

    cards : new FormArray([]),
    type: new FormControl(),
    busFee : new FormControl("",[Validators.required,Validators.min(0)]),
    hostelFee : new FormControl("",[Validators.required,Validators.min(0)]),
  })

  get cardFormArray(){
    return this.userForm.get('cards') as FormArray;
  }
  addCard(){
    this.cardFormArray.push(
      new FormGroup({
        number : new FormControl("",[Validators.required]),
        name : new FormControl("",Validators.required),
        cvv : new FormControl("",[Validators.required]),
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
