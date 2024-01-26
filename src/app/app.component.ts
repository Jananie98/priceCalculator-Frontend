
import { Component, Injectable, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { ProductService } from './services/products/product.service';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent implements OnInit  {

  title(title: any){
    throw new Error('Method not Implemented!');
  }

  calcForm = FormGroup;

  constructor(
    private _fb: FormBuilder,
    private _productService: ProductService,

  ){}

  ngOnInit(): void {
      this.getProducts();
  }

  getProducts(){
    this._productService.getProducts().subscribe({
      next: (res) => {

      }
    })
  }
    
  }

