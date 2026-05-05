import { Component } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { VehicleService } from '../vehicle.service';
import { Vehicle } from '../vehicle';

@Component({
  selector: 'app-vehicle-details',
  templateUrl: './vehicle-details.component.html',
  styleUrls: ['./vehicle-details.component.css']
})
export class VehicleDetailsComponent {
  vehicle:Vehicle=<Vehicle>{};
  constructor(private activatedroute:ActivatedRoute, private vehicleService:VehicleService){
    activatedroute.params.subscribe
    (
      (data:Params)=>{
        vehicleService.getVehicle(data['id']).subscribe(
          (data:Vehicle)=>{
            this.vehicle=data;
          }
        )
      }
    )
  }
}
