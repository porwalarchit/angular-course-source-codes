import { Component, ViewChild } from '@angular/core';
import { Product } from './model/products';
import { ProductService } from './service/products.service';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export default class AppComponent {
  title = 'AngularHttpRequest';
  allProducts: Product[] = [];
  isFetching: boolean = false;
  @ViewChild('productsForm') form: NgForm;
  editMode: boolean = false;
  currProductId: string;
  errorMessage: string = null;
  errorSub: Subscription;

  constructor(private prodService: ProductService) {
  }

  ngOnInit() {
    this.fetchProducts();
    this.errorSub = this.prodService.error.subscribe((message)=>{
      this.errorMessage = message;
    })
  }

  onProductsFetch() {
    this.fetchProducts();
  }

  onProductCreate(products: {pName: string, desc: string, price: string}) {
    if(!this.editMode)
      this.prodService.createProduct(products);
    else
      this.prodService.updateProduct(this.currProductId, products);
  }

  private fetchProducts() {
    this.isFetching = true;
    this.prodService.fetchProduct().subscribe((products)=>{
      this.allProducts = products;
      this.isFetching = false;
    }, (err)=>{
      this.errorMessage = err.message;
      console.log(this.errorMessage);
    })
  }

  onDeleteProduct(id: string) {
    this.prodService.deleteProduct(id);
  }

  onDeleteAllProducts() {
    this.prodService.deleteAllProducts();
  }

  onEditClicked(id: string){
    this.currProductId = id;
    // Get the product based on the id.
    let currProduct = this.allProducts.find((p)=>{return p.id === id});

    // Populate the form with the product details.
    this.form.setValue({
      pName: currProduct.pName,
      desc: currProduct.desc,
      price: currProduct.price
    });

    // Change the button value to update product.
    this.editMode = true;
  }

  ngOnDestroy(){
    this.errorSub.unsubscribe();
  }
}

