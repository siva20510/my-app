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
  //2- deletevehicle is created and getting id 
  deleteVehicle(id:string){
    this.vehicleService.deleteVehicle(id/* the id is passed here*/).subscribe(
      (data:any)=>{
        alert("deletion successfull!!!");
        //we should not use reload in application
        location.reload();//just to reload after deltion
      },(err:any)=>{
        alert("delete failed!");
      }
    )
  }

}
