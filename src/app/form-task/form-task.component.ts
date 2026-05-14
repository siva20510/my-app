import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-task',
  templateUrl: './form-task.component.html',
  styleUrls: ['./form-task.component.css'],
})
export class FormTaskComponent {
  productForm: FormGroup = new FormGroup({
    //id: new FormControl(),
    title: new FormControl("",[Validators.required,Validators.minLength(3),Validators.maxLength(20)]),
    description: new FormControl("",[Validators.required,Validators.minLength(3),Validators.maxLength(30)]),
    category: new FormControl("",[Validators.required,Validators.minLength(3),Validators.maxLength(10)]),
    price: new FormControl("",[Validators.required]),
    discountPercentage: new FormControl("",[Validators.required]),
    rating: new FormControl("",[Validators.required]),
    stock: new FormControl("",[Validators.required]),
    tags: new FormArray([]),
    brand: new FormControl("",[Validators.required]),
    sku: new FormControl("",[Validators.required]),
    weight: new FormControl("",[Validators.required]),
    dimensions: new FormGroup({
      width: new FormControl("",[Validators.required]),
      height: new FormControl("",[Validators.required]),
      depth: new FormControl("",[Validators.required]),
    }),
    warrantyInformation: new FormControl("",[Validators.required]),
    shippingInformation: new FormControl("",[Validators.required]),
    availabilityStatus: new FormControl("",[Validators.required]),
    reviews: new FormArray([]),
    returnPolicy: new FormControl("",[Validators.required]),
    minimumOrderQuantity: new FormControl("",[Validators.required]),
    meta: new FormGroup({
      createdAt: new FormControl("",[Validators.required]),
      updatedAt: new FormControl("",[Validators.required]),
      barcode: new FormControl("",[Validators.required]),
      qrCode: new FormControl("",[Validators.required]),
    }),
    images: new FormArray([]),
    thumbnail: new FormControl("",[Validators.required]),
  });
  //tags array
  get tagsFormArray() {
    return this.productForm.get('tags') as FormArray;
  }
  //reviews array
  get reviewsFormArray() {
    return this.productForm.get('reviews') as FormArray;
  }
  //images array
  get imagesFormArray() {
    return this.productForm.get('images') as FormArray;
  }

  
  //add tag
  addTag() {
    this.tagsFormArray.push(new FormControl({}));
  }
  deleteTag(i: number) {
    this.tagsFormArray.removeAt(i);
  }

  //add review

  addReview() {
    this.reviewsFormArray.push(
      new FormGroup({
        rating: new FormControl("",[Validators.required]),
        comment: new FormControl("",[Validators.required]),
        date: new FormControl("",[Validators.required]),
        reviewerName: new FormControl("",[Validators.required]),
        reviewerEmail: new FormControl("",[Validators.required]),
      }),
    );
  }
  deleteReview(i: number) {
    this.reviewsFormArray.removeAt(i);
  }
  //add image
  addImage() {
    this.imagesFormArray.push(new FormControl({}));
  }
  deleteImage(i: number) {
    this.imagesFormArray.removeAt(i);
  }

  submit(){
    console.log(this.productForm);
  }
}
