import { DialogComponent } from './../dialog/dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { ProductService } from './../create-product/product.service';
import { Product } from './../create-product/product.model';
import { Component, OnInit, ɵɵqueryRefresh } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-read-product',
  templateUrl: './read-product.component.html',
  styleUrls: ['./read-product.component.css']
})
export class ReadProductComponent implements OnInit {

  products: Product[] = []
  displayedColumns = ['id', 'name', 'price', 'actions']

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private dialog: MatDialog
  ) {

  }

  ngOnInit(): void {
    this.productService.read().subscribe(products => {
      this.products = products
    })
  }

  openDialog(id: string) {
    let dialogRef = this.dialog.open(DialogComponent)
    dialogRef.afterClosed().subscribe(result => {
      if (result == "true") { //Delete Product
        this.productService.delete(id).subscribe()
        this.productService.showMessage("Produto excluído")

        this.refresh()
      }
    })
  }

  refresh(){
    this.productService.read().subscribe(products => {
      this.products = products
    })
  }

}
