import { HeaderService } from './../header/header.service';
import { Product } from './../create-product/product.model';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from './../create-product/product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css']
})
export class ProductUpdateComponent implements OnInit {

  product: Product = { name: '', price: 0 }

  constructor(
    private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute,
    private headerService: HeaderService
  ) { 
    headerService.headerData = {
      title : 'Atualizar Produto',
      icon : 'home',
      routeUrl : ''
    }
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    if (id !== null) {
      this.productService.readbyId(id).subscribe(product => {
        this.product = product
      })
    }
  }

  updateProduct(): void {
    this.productService.update(this.product).subscribe(product => {
      this.product = product
      this.productService.showMessage('Produto Modificado')
      this.router.navigate(['product'])
    })
  }

  cancel(): void {
    this.router.navigate(['product'])
  }

}
