import { HeaderService } from './../header/header.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(private router: Router, private headerService: HeaderService) { 
    headerService.headerData = {
      title : 'Cadastro de produtos',
      icon : 'storefront',
      routeUrl : ''
    }
  }

  ngOnInit(): void {
  }

  toCreateProduct(){
    this.router.navigate(['product/create-product'])
  }

}
