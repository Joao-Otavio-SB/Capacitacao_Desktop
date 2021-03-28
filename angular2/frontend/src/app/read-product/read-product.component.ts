import { ProductService } from './../create-product/product.service';
import { Product } from './../create-product/product.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-read-product',
  templateUrl: './read-product.component.html',
  styleUrls: ['./read-product.component.css']
})
export class ReadProductComponent implements OnInit {

  products: Product[] = []
  displayedColumns = ['id', 'name', 'price', 'actions']

  constructor(private productService: ProductService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.productService.read().subscribe(products => {
      this.products = products
    })
  }

  delete(id: string){
    this.productService.delete(id).subscribe()
    this.productService.showMessage("Produto excluído")

    this.productService.read().subscribe(products => {
      this.products = products
    })
  }

}
