import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { DirectivesComponent } from './directives/directives.component';
import { PipesComponent } from './pipes/pipes.component';
import { UsersComponent } from './users/users.component';
import { ProductsComponent } from './products/products.component';
import { VehiclesComponent } from './vehicles/vehicles.component';
import {VehicleDetailsComponent} from './vehicle-details/vehicle-details.component';
import { CreateVehicleComponent } from './create-vehicle/create-vehicle.component';
import { AccountsComponent } from './accounts/accounts.component';
import { FlipkartComponent } from './flipkart/flipkart.component';
import { Products2Component } from './products2/products2.component';
import { MailComponent } from './mail/mail.component';
import { WeatherComponent } from'./weather/weather.component';
import { FormControl,FormGroup } from '@angular/forms';
import { AuthGuard } from './auth.guard';
import { NotifyGuard } from './notify.guard';
import { CreateUserComponent } from './create-user/create-user.component';
import { ParentComponent } from './parent/parent.component';
import { CartComponent } from './cart/cart.component';
import { ItemsComponent } from './items/items.component';
import { NavComponent } from './nav/nav.component';
import { ContactSalesComponent } from './contact-us/contact-sales/contact-sales.component';

const routes: Routes = [
  {path:'login', component:LoginComponent},
  {path:'dashboard',canActivate:[AuthGuard], component:DashboardComponent,children:[
    {path:'home',component:HomeComponent},
    {path:'welcome',component:WelcomeComponent},
    {path:'data-binding',component:DataBindingComponent},
    {path:'directives', component:DirectivesComponent},
    {path:'pipes',component:PipesComponent},
    {path:'users',component:UsersComponent},
    {path:'products',component:ProductsComponent},
    {path:'vehicles',component:VehiclesComponent},
    {path:'accounts',component:AccountsComponent},
    {path:'flipkart',component:FlipkartComponent},
    {path:'products2',component:Products2Component},
    {path:'mails',component:MailComponent},
    {path:'Weather',component:WeatherComponent},
    {path:'create-vehicle',canDeactivate:[NotifyGuard], component:CreateVehicleComponent},
    {path:'vehicle-details/:id',component:VehicleDetailsComponent},
    {path:'edit-vehicle/:id',component:CreateVehicleComponent},
    {path:'create-user', component:CreateUserComponent},
    {path:'parent',component:ParentComponent},
    {path:'cart',component:CartComponent},
    {path:'items', component:ItemsComponent},
    {path:'nav',component:NavComponent},
    {path:'contact-sales',component:ContactSalesComponent},
    {path:'payment', loadChildren: ()=>import('./payment/payment.module').then(m=>m.PaymentModule)}

  ]},
  {path:'',component:LoginComponent},
  {path:'**',component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{preloadingStrategy:PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule { }