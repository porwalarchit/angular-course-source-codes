import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export default class AppComponent{
  title = 'AngularHttpRequest';

  constructor(private http: HttpClient){

  }

  onProductCreate(products: [pName: string, desc: string, price: string]){
    console.log(products);
    this.http.post("https://angularcourse-84f74-default-rtdb.firebaseio.com/products.json", products)
    .subscribe((res)=>{
      console.log(res);
    });
  }
}


