import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { products } from '../products';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  @Input() product;
  products = products;
  constructor() { }

  ngOnInit() {
  }

  public like(product:any){
    product.likes++;
  }

  removeItem(productId: number) {
    var index = this.products.indexOf(productId);
    this.products.splice(index, 1);
  }
}