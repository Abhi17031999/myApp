import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.page.html',
  styleUrls: ['./product-list.page.scss'],
})
export class ProductListPage implements OnInit {
  products = [
    {
      id:1,
      name: 'SAMSUNG Galaxy S23 FE',
      price: 23000,
      image: 'assets/OIP (1).jpeg',
    },
    {
      id:2,
      name: 'SAMSUNG Galaxy S23 FE',
      price: 29000,
      image: 'assets/OIP (2).jpeg',
    },
    {
      id:3,
      name: 'SAMSUNG Galaxy S23 FE',
      price: 41000,
      image: 'assets/OIP (3).jpeg',
    },
    {
      id:4,
      name: 'SAMSUNG Galaxy S23 FE',
      price: 43999,
      image: 'assets/OIP (4).jpeg',
    },
    {
      id:5,
      name: 'SAMSUNG Galaxy S23 FE',
      price: 26999,
      image: 'assets/OIP (5).jpeg',
    },
    {
      id:6,
      name: 'SAMSUNG Galaxy S24 FE',
      price: 118000,
      image: 'assets/zLSMVlI0.jpg',
    },
    {
      id:7,
      name: 'SAMSUNG Galaxy S24 FE',
      price:128666,
      image: 'assets/zLSMVlI0.jpg',
    },
    {
      id:8,
      name: 'SAMSUNG Galaxy S24 FE',
      price: 38999,
      image: 'assets/zLSMVlI0.jpg',
    },
    {
      id:9,
      name: 'SAMSUNG Galaxy S24 FE',
      price: 112000,
      image: 'assets/zLSMVlI0.jpg',
    },
  ];
  constructor(private router : Router) { }

  ngOnInit() {
  }
  routeToDetailsPage(event:any){
    this.router.navigate(['/product-details']);
     localStorage.setItem('itemName',event)
  }
}
