import { Component } from '@angular/core';
import { VehicleService } from '../vehicle.service';

@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.css']
})
export class VehiclesComponent {
  vehicles:any = [];

  constructor(private vehicleService:VehicleService){
    vehicleService.getVehicles().subscribe(
      (data:any) =>{
        this.vehicles =data;
      },
      (err:any) =>{
        alert("Internal server error");
      }
    )
  }

}
