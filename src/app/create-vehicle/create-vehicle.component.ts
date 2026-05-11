import { Component } from '@angular/core';
import { FormControl, FormGroup, MaxLengthValidator, Validators } from '@angular/forms';
import { VehicleService } from '../vehicle.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Vehicle } from '../vehicle';
@Component({
  selector: 'app-create-vehicle',
  templateUrl: './create-vehicle.component.html',
  styleUrls: ['./create-vehicle.component.css'],
})
export class CreateVehicleComponent {
  vehicleForm: FormGroup = new FormGroup({
    Vehicle: new FormControl("",[Validators.required,Validators.minLength(3),Validators.maxLength(10)]),
    manufacturer: new FormControl("",[Validators.required,Validators.minLength(3),Validators.maxLength(10)]),
    model: new FormControl("",[Validators.required,Validators.minLength(3),Validators.maxLength(10)]),
    type: new FormControl("",[Validators.required,Validators.minLength(3),Validators.maxLength(10)]),
    fuel: new FormControl("",[Validators.required,Validators.minLength(3),Validators.maxLength(10)]),
    color: new FormControl("",[Validators.required,Validators.minLength(3),Validators.maxLength(10)]),
    image: new FormControl("",[Validators.required]),
  });

  id:string="";
  constructor(private vehicleService: VehicleService,private activatedRoute:ActivatedRoute) {
    activatedRoute.params.subscribe(
      (data:Params)=>{
        this.id=data['id'];
        vehicleService.getVehicle(data['id']).subscribe(
          (data:Vehicle)=>{
            //using patch to provide available data in the form
            //using vehicleForm to store the gotten data
            this.vehicleForm.patchValue(data);
          }
        )
      }
    )
  } 

  submit(){
    if(this.id){
      //edit
      this.vehicleService.editVehicle(this.id,this.vehicleForm.value).subscribe(
      (data: Vehicle) => {
        alert('edited Successfully');
        this.vehicleForm.reset();
      },
      (err: Error) => {
        alert('edit failed');
      },
    );
    }
    else{
      //create
      this.vehicleService.createVehicl(this.vehicleForm.value).subscribe(
      (data: Vehicle) => {
        alert('Created Successfully');
        this.vehicleForm.reset();
      },
      (err: Error) => {
        alert('Creation failed');
      },
    );
    }
  }
}
