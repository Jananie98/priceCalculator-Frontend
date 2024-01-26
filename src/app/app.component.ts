
import { Component, Injectable, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { ProductService } from './services/products/product.service';
import{ MatTableDataSource } from '@angular/material/table';
import { DisplayPriceService } from './services/price/displayprice.service';
import { MatPaginator } from '@angular/material/paginator';


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

  displayColumns: string[] = [
    'name',
    'price1',
    'price2',
    'price3',
    'price4',
    'price5',
  ];
  dataSource!: MatTableDataSource<any>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  calcForm = FormGroup;

  constructor(
    private _fb: FormBuilder,
    private _productService: ProductService,
    private _displayPrices: DisplayPriceService,

  ){}

  ngOnInit(): void {
      // this.getProducts();
  }

  // getProducts(){
  //   this._productService.getProducts().subscribe({
  //     next: (res) => {
  //       this.dataSource = new MatTableDataSource(res);
  //       this.dataSource.paginator = this.paginator;

  //     },
  //   })
  // }
    
  }

