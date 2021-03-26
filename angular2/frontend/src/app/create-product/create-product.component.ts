import { Product } from './product.model';
import { Router } from '@angular/router';
import { ProductService } from './product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {

  product: Product = { name: '', price: 0}

  constructor(private productService: ProductService, private router: Router) { }

  ngOnInit(): void {
  }

  createProduct() {
    this.productService.create(this.product).subscribe(() => {
      this.productService.showMessage('Produto criado!')
      this.router.navigate(['product'])
    })
  }

  cancel() {
    this.router.navigate(['product'])
  }

}
