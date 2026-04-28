import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { BrowserModule } from "@angular/platform-browser";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent {
  products:any = [
  { productName: "Wireless Mouse", price: 25.99, rating: 4.5 },
  { productName: "Bluetooth Speaker", price: 49.99, rating: 4.3 },
  { productName: "Laptop Backpack", price: 39.50, rating: 4.6 },
  { productName: "Smart Watch", price: 129.99, rating: 4.4 },
  { productName: "USB-C Charger", price: 19.99, rating: 4.7 },
  { productName: "Noise Cancelling Headphones", price: 89.99, rating: 4.5 },
  { productName: "Gaming Keyboard", price: 59.99, rating: 4.2 },
  { productName: "Fitness Band", price: 34.99, rating: 4.1 },
  { productName: "Portable SSD 1TB", price: 99.99, rating: 4.8 },
  { productName: "LED Desk Lamp", price: 27.49, rating: 4.4 }
];
term:string = "";

name:string="";
price:number=0;
rating:number=0;
freeDelivery:boolean=true;
//getting data via term and filtering it with table data usin include
search(){
this.products = this.products.filter((product:any)=>product.productName.includes(this.term)) 
}
//getting user details as inputs
addCart(){
  let product = {
    productName : this.name,
    price : this.price,
    rating : this.rating,
    freeDelivery :this.freeDelivery

  }
  //add above data in first row
  this.products.unshift(product);
}
//buttons functionality
onlyFreeDelivery(){
  this.products = this.products.filter((product:any) => product.onlyFreeDelivery==false);

}
PricaLH(){
this.products.sort((a:any,b:any) => a.price-b.price);
}
PriceHL(){
this.products.sort((a:any,b:any) => b.price-a.price);

}
ratingLH(){
this.products.sort((a:any,b:any) => a.rating-b.rating);

}
ratingHL(){
this.products.sort((a:any,b:any) => b.rating-a.rating);
}
Discount(){
  this.products = this.products.map((product:any) =>{
    product.price = product.price*0.5;
    return product;
  })

}
PriceWithDeliveryCharges(){
  this.products= this.products.map((a:any) => {
    a.price = a.price < 50 ? a.price+100:a.price+0;
     return a;
  });
 

}
Totalprize(){
    let total = this.products.reduce((agg:number,product:any)=>agg+product.price,0);
    alert("Total Cost of all items: "+ Math.ceil(total));

}
TotalCart(){
  alert("Total Cart Items : "+this.products.length);
}
delete(i:number){
i == 0 ? this.products.splice(0,1):this.products.splice(1,1);
}


}
