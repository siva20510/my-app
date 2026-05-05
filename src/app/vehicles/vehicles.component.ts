import { Component } from '@angular/core';
import { VehicleService } from '../vehicle.service';
import { Vehicle } from '../vehicle';

@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.css'],
})
export class VehiclesComponent {
  vehicles: Vehicle[] = [];

  constructor(private vehicleService: VehicleService) {
    vehicleService.getVehicles().subscribe(
      (data: Vehicle[]) => {
        this.vehicles = data;
      },
      (err: Error) => {
        alert('Internal server error');
      },
    );
  }
  //2- deletevehicle is created and getting id
  deleteVehicle(id: string) {
    this.vehicleService.deleteVehicle(id /* the id is passed here*/).subscribe(
      (data: Vehicle) => {
        alert('deletion successfull!!!');
        //we should not use reload in application
        location.reload(); //just to reload after deltion
      },
      (err: Error) => {
        alert('delete failed!');
      },
    );
  }
  term: string = '';
  filteredvehicles() {
    this.vehicleService.filteredvehicles(this.term).subscribe(
      (data: Vehicle[]) => {
        this.vehicles = data;
      },
      (err: Error) => {
        alert('Internel server error!');
      },
    );
  }
  column: string = '';
  order: string = '';
  sortVehicles() {
    this.vehicleService.getSortvehicles(this.column, this.order).subscribe(
      (data: Vehicle[]) => {
        this.vehicles = data;
      },
      (err: Error) => {
        alert('Internel server error!');
      },
    );
  }

  pageVehicle(page: number) {
    this.vehicleService.getPagedVehicles(page).subscribe(
      (data: Vehicle[]) => {
        this.vehicles = data;
      },
      (err: Error) => {
        alert('Internel server error!');
      },
    );
  }
  getVehicleWithParams(page: number = 1) {
    this.vehicleService
      .getVehicleWithParams(this.term, this.column, this.order, page)
      .subscribe(
        (data: Vehicle[]) => {
          this.vehicles = data;
        },
        (err: Error) => {
          alert('Internel server error!');
        },
      );
  }
}
