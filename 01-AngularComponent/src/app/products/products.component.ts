import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  products = [
    {
      id: 1,
      name: 'Mininamlists Analog Watch',
      price: '109',
      color: 'Black',
      available: "Available",
      image: 'assets/products/analog-watch.jpg'
    },
    {
      id: 2,
      name: 'HD Smart TV',
      price: '3339',
      color: 'Black',
      available: "Available",
      image: 'assets/products/smart-tv.jpg'
    },
    {
      id: 3,
      name: 'Apple iphone 12',
      price: '1855',
      color: 'Black',
      available: "Not Available",
      image: 'assets/products/iphone-12.jpg'
    },
    {
      id: 4,
      name: 'LG Washing Machine',
      price: '1765',
      color: 'White',
      available: "Available",
      image: 'assets/products/washing-machine.jpg'
    },
    {
      id: 5,
      name: 'LG Refrigerator',
      price: '2815',
      color: 'White',
      available: "Not Available",
      image: 'assets/products/fridge.jpg'
    },
    {
      id: 6,
      name: 'Dell Inspiron One',
      price: '2145',
      color: 'Black',
      available: "Available",
      image: 'assets/products/Dell.png'
    }
  ];
}
