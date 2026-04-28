import { Component } from '@angular/core';

@Component({
  selector: 'app-products2',
  templateUrl: './products2.component.html',
  styleUrls: ['./products2.component.css'],
})
export class Products2Component {
  products:any = [
  {
    id: 1,
    name: "Samsung Galaxy M14",
    category: "Mobile",
    brand: "Samsung",
    price: 13999,
    rating: 4.3,
    freeDelivery: true,
    stock: 25
  },
  {
    id: 2,
    name: "iPhone 14",
    category: "Mobile",
    brand: "Apple",
    price: 64999,
    rating: 4.7,
    freeDelivery: true,
    stock: 12
  },
  {
    id: 3,
    name: "HP Pavilion",
    category: "Laptop",
    brand: "HP",
    price: 55999,
    rating: 4.4,
    freeDelivery: false,
    stock: 8
  },
  {
    id: 4,
    name: "Boat Rockerz 450",
    category: "Headphones",
    brand: "Boat",
    price: 1499,
    rating: 4.2,
    freeDelivery: true,
    stock: 35
  },
  {
    id: 5,
    name: "Nike Shoes",
    category: "Footwear",
    brand: "Nike",
    price: 3299,
    rating: 4.5,
    freeDelivery: false,
    stock: 20
  },
  {
    id: 6,
    name: "LG Smart TV",
    category: "Electronics",
    brand: "LG",
    price: 28999,
    rating: 4.6,
    freeDelivery: true,
    stock: 6
  },
  {
    id: 7,
    name: "Puma T-Shirt",
    category: "Clothing",
    brand: "Puma",
    price: 799,
    rating: 4.1,
    freeDelivery: true,
    stock: 40
  },
  {
    id: 8,
    name: "Prestige Cooker",
    category: "Home Appliance",
    brand: "Prestige",
    price: 2499,
    rating: 3.3,
    freeDelivery: false,
    stock: 0
  }
];
//search 
s_text:string="";
search(){
this.products = this.products.filter((product:any) => product.name.includes(this.s_text));
}
//only free delivery
OnlyFreeDelivery(){
  this.products= this.products.filter((product:any) => product.freeDelivery == true);

}
//prices
PriceLH(){
  this.products= this.products.sort((a:any,b:any) => a.price-b.price);

}
PriceHL(){
  this.products= this.products.sort((a:any,b:any) => b.price-a.price);

}
ratingLH(){
  this.products = this.products.sort((a:any, b:any)=>a.rating-b.rating);
}

ratingHL(){
  this.products = this.products.sort((a:any, b:any)=>b.rating-a.rating);
}
apply50(){
  this.products= this.products.map((product:any)=>{
    product.price= product.price * 0.5;
    return product;
  });
}
priceWithDeliveryCharges(){
  this.products = this.products.map((a:any)=> {
    a.price = a.price < 10000 ? a.price+199 : a.price+0;
    return a;
  })
  
}
totalPrice(){
  let total= this.products.reduce((agg:any, product:any)=>
    agg+product.price,0);
  alert("total price :"+total);
}
totalCartItems(){
  alert("Total Cart items :"+this.products.length);
}
HighestPriceProduct(){
  let x= this.products.sort((a:any,b:any) => b.price-a.price);
  this.products=[x[0]];
}
LowestPriceProduct(){
  let y= this.products.sort((a:any,b:any) => a.price-b.price);
  this.products=[y[0]];
}
HighestRatingProduct(){
  let x = this.products.sort((a:any, b:any)=>b.rating-a.rating);
  this.products=[x[0]];
}
LowestRatingProduct(){
  let x = this.products.sort((a:any, b:any)=>a.rating-b.rating);
  this.products=[x[0]];
}
onlyInStock(){
  this.products=this.products.filter((product:any)=>product.stock>0);
}
outOfStock(){
  this.products=this.products.filter((product:any)=>product.stock==0);  
}
onlyMobiles(){
  this.products=this.products.filter((product:any)=> product.category=="Mobile");
}
onlyLaptops(){
  this.products=this.products.filter((a:any)=>a.category=="Laptop");
}
priceA10000(){
  this.products=this.products.filter((a:any)=> a.price>10000);
}
priceB10000(){
  this.products=this.products.filter((a:any)=> a.price<10000);
}
ratingA4(){
  this.products=this.products.filter((a:any)=> a.rating>4);  
}
ratingB4(){
  this.products=this.products.filter((a:any)=> a.rating<4);  
}
freeDeliveryCount(){
  let x =this.products.filter((product:any) => product.freeDelivery == true);
  alert("freeDeliveryCount :"+x.length);
}
averageprice(){
  let total= this.products.reduce((agg:any, product:any)=>
    agg+product.price,0);
  let avg=total/this.products.length;
  alert("Average price : "+avg);  
}
}
