import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root',
})

export class DisplayPriceService{
    constructor(private _http: HttpClient){}

    // this function should get the values from db depending on product type
    // base value and carton quantity
    // same calculation as the backend
    
    // then in a for loop calculate for 25 units are return
}