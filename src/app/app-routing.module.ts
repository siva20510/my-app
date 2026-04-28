import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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
import { AccountsComponent } from './accounts/accounts.component';
import { FlipkartComponent } from './flipkart/flipkart.component';
import { Products2Component } from './products2/products2.component';
import { MailComponent } from './mail/mail.component';

const routes: Routes = [
  {path:'login', component:LoginComponent},
  {path:'dashboard', component:DashboardComponent,children:[
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
    {path:'mails',component:MailComponent}
  ]},
  {path:'',component:LoginComponent},
  {path:'**',component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }