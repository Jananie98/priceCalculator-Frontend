import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root',
})

export class ProductService{
    constructor(private _http: HttpClient){

    getProducts(): Observable<any>{
         return this._http.get('http://localhost:3000/api/v1/item/list');
    }
    }
}