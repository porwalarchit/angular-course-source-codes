import { Component } from '@angular/core';
import { Product } from './model/products';
import { ProductService } from './service/products.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export default class AppComponent {
  title = 'AngularHttpRequest';
  allProducts: Product[] = [];
  isFetching: boolean = false;

  constructor(private prodService: ProductService) {
  }

  ngOnInit() {
    this.fetchProducts();
  }

  onProductsFetch() {
    this.fetchProducts();
  }

  onProductCreate(products: [pName: string, desc: string, price: string]) {
    this.prodService.createProduct(products);
  }

  private fetchProducts() {
    this.isFetching = true;
    this.prodService.fetchProduct().subscribe((products)=>{
      this.allProducts = products;
      this.isFetching = false;
    })
  }

  onDeleteProduct(id: string) {
    this.prodService.deleteProduct(id);
  }

  onDeleteAllProducts() {
    this.prodService.deleteAllProducts();
  }
}

