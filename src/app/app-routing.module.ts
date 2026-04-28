import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { HomeComponent } from './home/home.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { DirectivesComponent } from './directives/directives.component';
import { PipesComponent } from './pipes/pipes.component';
import { UsersComponent } from './users/users.component';
import { ProductsComponent } from './products/products.component';
import { Products2Component } from './products2/products2.component';
import { VehiclesComponent } from './vehicles/vehicles.component';
import { AccountsComponent } from './accounts/accounts.component';

const routes: Routes = [
  {path:'login', component:LoginComponent},
  {path:'dashboard', component:DashboardComponent, children:[
    {path:'welcome', component:WelcomeComponent},
    {path:'home', component:HomeComponent},
    {path:'data-binding', component:DataBindingComponent},
    {path:'directives',component:DirectivesComponent},
    {path:'pipes',component:PipesComponent},
    {path:'users',component:UsersComponent},
    {path:'products', component:ProductsComponent},
    {path:'products2',component:Products2Component},
    {path:'vehicles',component:VehiclesComponent},
    {path:'accounts',component:AccountsComponent}
  ]},
  {path:'', component:LoginComponent},
  {path:'**', component:PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
