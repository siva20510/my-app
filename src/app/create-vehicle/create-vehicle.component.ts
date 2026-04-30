import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { VehicleService } from '../vehicle.service';
@Component({
  selector: 'app-create-vehicle',
  templateUrl: './create-vehicle.component.html',
  styleUrls: ['./create-vehicle.component.css'],
})
export class CreateVehicleComponent {
  vehicleForm: FormGroup = new FormGroup({
    Vehicle: new FormControl(),
    manufacturer: new FormControl(),
    model: new FormControl(),
    type: new FormControl(),
    fuel: new FormControl(),
    color: new FormControl(),
    image: new FormControl(),
  });
  submit(){
    console.log(this.vehicleForm);
    this.vehicleService.createVehicl(this.vehicleForm.value).subscribe(
      (data:any)=>{
        alert("Created Successfully");
        this.vehicleForm.reset();
      },(err:any)=>{
        alert("Creation failed");
      }
    )
  }
  constructor(private vehicleService:VehicleService){}

}