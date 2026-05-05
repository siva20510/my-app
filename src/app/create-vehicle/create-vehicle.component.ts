import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
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
    Vehicle: new FormControl(),
    manufacturer: new FormControl(),
    model: new FormControl(),
    type: new FormControl(),
    fuel: new FormControl(),
    color: new FormControl(),
    image: new FormControl(),
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
