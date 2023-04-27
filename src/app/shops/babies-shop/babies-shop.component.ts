import { ProductService } from './../../services/product.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-babies-shop',
  templateUrl: './babies-shop.component.html',
  styleUrls: ['./babies-shop.component.css']
})
export class BabiesShopComponent implements OnInit{
  products: any;
  
  constructor(private productservice: ProductService) {}
  ngOnInit(): void {
    
    this.productservice.getAll()
    .subscribe(
      res=>{
        this.products = res;

      },
      err=>{
        console.log(err)
      }
    )
  };
    
  }
  
  

