import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, map } from "rxjs/operators";
import { Product } from '../model/products';
import { Observable, Subject, throwError } from "rxjs";


@Injectable({ providedIn: "root" })
export class ProductService {
    error = new Subject<string>()
    constructor(private http: HttpClient) {

    }

    // Create Product in Database
    createProduct(products: {pName: string, desc: string, price: string}) {
        console.log(products);
        const headers = new HttpHeaders({ 'myHeader': 'Archit' })
        this.http.post<{ name: string }>
            ("https://angularcourse-84f74-default-rtdb.firebaseio.com/products.json", products, { headers: headers })
            .subscribe((res) => {
                console.log(res);
            }, (err)=>{
                this.error.next(err.message);
            });
    }

    // fetch Products from database
    fetchProduct(): Observable<any>{
        return this.http.get<{ [key: string]: Product; }>("https://angularcourse-84f74-default-rtdb.firebaseio.com/products.json")
            .pipe(map((res) => {
                const products = [];
                for (const key in res) {
                    if (res.hasOwnProperty(key)) {
                        products.push({ ...res[key], id: key });
                    }
                }
                return products;
            }), catchError((err)=>{
                // write the logic for logging error
                return throwError(err);
            }));
    }

    // Delete Products from database
    deleteProduct(id: string) {
        this.http.delete("https://angularcourse-84f74-default-rtdb.firebaseio.com/products/" + id + ".json")
      .subscribe();
    }

    // Delete all Products from database
    deleteAllProducts() {
        this.http.delete("https://angularcourse-84f74-default-rtdb.firebaseio.com/products.json")
      .subscribe();
    }

    updateProduct(id: string, value: Product){
        this.http.put("https://angularcourse-84f74-default-rtdb.firebaseio.com/products/" + id + ".json", value)
        .subscribe();
    }
}