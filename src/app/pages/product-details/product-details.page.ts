import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.page.html',
  styleUrls: ['./product-details.page.scss'],
})
export class ProductDetailsPage implements OnInit {
  product = [ {
    id:1,
    name: 'SAMSUNG Galaxy S23 FE',
    discountedPrice: 23000,
    image: 'assets/OIP (1).jpeg',
    color: 'Cream',
    storage: '128 GB',
    ram: '8 GB',
    ratings: 4645743,
    reviews: 2722,
    originalPrice: 89999,
    discountPercentage: 55,
    offers: [
      '5% Unlimited Cashback on Flipkart Axis Bank Credit Card',
      'Extra ₹50000 off (price inclusive of cashback/coupon)',
      'Extra ₹500 off on Jewellery by Mia',
      'Spotify Premium - 12M at ₹699',
    ],
    Highlights:[
      '8 GB RAM | 128 GB ROM',
   '15.49 cm (6.1 inch) Full HD+ Display',
   '50MP + 10MP + 12MP | 12MP Front Camera',
'3900 mAh Lithium Ion Battery',
'Qualcomm Snapdragon 8 Gen 2 Processor'
    ]
  },

  { id:2,
    name: 'SAMSUNG Galaxy S23 FE',
    discountedPrice: 29000,
    image: 'assets/OIP (2).jpeg',
    color: 'Blue',
    storage: '128 GB',
    ram: '8 GB',
    ratings: 4645743,
    reviews: 2722,
    originalPrice: 89999,
    discountPercentage: 55,
    offers: [
      '5% Unlimited Cashback on Flipkart Axis Bank Credit Card',
      'Extra ₹50000 off (price inclusive of cashback/coupon)',
      'Extra ₹500 off on Jewellery by Mia',
      'Spotify Premium - 12M at ₹699',
    ],
    Highlights:[
      '8 GB RAM | 128 GB ROM',
   '15.49 cm (6.1 inch) Full HD+ Display',
   '50MP + 10MP + 12MP | 12MP Front Camera',
'3900 mAh Lithium Ion Battery',
'Qualcomm Snapdragon 8 Gen 2 Processor'
    ]
  },
  {
    id:3,
    name: 'SAMSUNG Galaxy S23 FE',
    discountedPrice: 41000,
    image: 'assets/OIP (3).jpeg',
    color: 'black',
    storage: '256 GB',
    ram: '16 GB',
    ratings: 4645743,
    reviews: 2722,
    originalPrice: 89999,
    discountPercentage: 55,
    offers: [
      '5% Unlimited Cashback on Flipkart Axis Bank Credit Card',
      'Extra ₹50000 off (price inclusive of cashback/coupon)',
      'Extra ₹500 off on Jewellery by Mia',
      'Spotify Premium - 12M at ₹699',
    ],
    Highlights:[
      '16 GB GB RAM | 256 GB ROM',
   '15.49 cm (6.1 inch) Full HD+ Display',
   '50MP + 10MP + 12MP | 12MP Front Camera',
'55000 mAh Lithium Ion Battery',
'Qualcomm Snapdragon 8 Gen 2 Processor'
    ]
  },
  {
    id:4,
    name: 'SAMSUNG Galaxy S23 FE',
    discountedPrice: 43999,
    image: 'assets/OIP (4).jpeg',
    color: 'Cream',
    storage: '256 GB',
    ram: '16GB',
    ratings: 4645743,
    reviews: 2722,
    originalPrice: 89999,
    discountPercentage: 55,
    offers: [
      '5% Unlimited Cashback on Flipkart Axis Bank Credit Card',
      'Extra ₹50000 off (price inclusive of cashback/coupon)',
      'Extra ₹500 off on Jewellery by Mia',
      'Spotify Premium - 12M at ₹699',
    ],
    Highlights:[
      '16 GB GB RAM | 256 GB ROM',
   '15.49 cm (6.1 inch) Full HD+ Display',
   '50MP + 10MP + 12MP | 12MP Front Camera',
'55000 mAh Lithium Ion Battery',
'Qualcomm Snapdragon 8 Gen 2 Processor'
    ]
  },
  {
    id:5,
    name: 'SAMSUNG Galaxy S23 FE',
    discountedPrice: 39999,
    image: 'assets/OIP (5).jpeg',
    color: 'Black',
    storage: '128 GB',
    ram: '8 GB',
    ratings: 4645743,
    reviews: 2722,
    originalPrice: 89999,
    discountPercentage: 55,
    offers: [
      '5% Unlimited Cashback on Flipkart Axis Bank Credit Card',
      'Extra ₹50000 off (price inclusive of cashback/coupon)',
      'Extra ₹500 off on Jewellery by Mia',
      'Spotify Premium - 12M at ₹699',
    ],
    Highlights:[
      '8 GB RAM | 128 GB ROM',
   '15.49 cm (6.1 inch) Full HD+ Display',
   '50MP + 10MP + 12MP | 12MP Front Camera',
'3900 mAh Lithium Ion Battery',
'Qualcomm Snapdragon 8 Gen 2 Processor'
    ]
  },
  {
    id:6,
    name: 'SAMSUNG Galaxy S24 FE',
    discountedPrice: 118000,
    image: 'assets/zLSMVlI0.jpg',
    color: 'Black',
    storage: '384 GB',
    ram: '32 GB',
    ratings: 4645743,
    reviews: 2722,
    originalPrice: 89999,
    discountPercentage: 55,
    offers: [
      '5% Unlimited Cashback on Flipkart Axis Bank Credit Card',
      'Extra ₹50000 off (price inclusive of cashback/coupon)',
      'Extra ₹500 off on Jewellery by Mia',
      'Spotify Premium - 12M at ₹699',
    ],
    Highlights:[
      '16 GB RAM | 384 GB ROM',
   '15.49 cm (6.1 inch) Full HD+ Display',
   '50MP + 10MP + 12MP | 12MP Front Camera',
'5500 mAh Lithium Ion Battery',
'Qualcomm Snapdragon 8 Gen 2 Processor'
    ]
  },
  {
    id:7,
    name: 'SAMSUNG Galaxy S24 FE',
    discountedPrice:128666,
    image: 'assets/zLSMVlI0.jpg',
    color: 'Black',
    storage: '256 GB',
    ram: '16 GB',
    ratings: 4645743,
    reviews: 2722,
    originalPrice: 89999,
    discountPercentage: 55,
    offers: [
      '5% Unlimited Cashback on Flipkart Axis Bank Credit Card',
      'Extra ₹50000 off (price inclusive of cashback/coupon)',
      'Extra ₹500 off on Jewellery by Mia',
      'Spotify Premium - 12M at ₹699',
    ],
    Highlights:[
      '16 GB RAM | 256 GB ROM',
   '15.49 cm (6.1 inch) Full HD+ Display',
   '50MP + 10MP + 12MP | 12MP Front Camera',
'3900 mAh Lithium Ion Battery',
'Qualcomm Snapdragon 8 Gen 2 Processor'
    ]
  },
  {
    id:8,
    name: 'SAMSUNG Galaxy S24 FE',
    discountedPrice: 38999,
    image: 'assets/zLSMVlI0.jpg',
    storage: '128 GB',
    ram: '8 GB',
    ratings: 4645743,
    reviews: 2722,
    originalPrice: 89999,
    discountPercentage: 55,
    offers: [
      '5% Unlimited Cashback on Flipkart Axis Bank Credit Card',
      'Extra ₹50000 off (price inclusive of cashback/coupon)',
      'Extra ₹500 off on Jewellery by Mia',
      'Spotify Premium - 12M at ₹699',
    ],
    Highlights:[
      '8 GB RAM | 128 GB ROM',
   '15.49 cm (6.1 inch) Full HD+ Display',
   '50MP + 10MP + 12MP | 12MP Front Camera',
'3900 mAh Lithium Ion Battery',
'Qualcomm Snapdragon 8 Gen 2 Processor'
    ]
  },
  {
    id:9,
      name: 'SAMSUNG Galaxy S24 FE',
      discountedPrice: 112000,
      image: 'assets/zLSMVlI0.jpg',
    color: 'Black',
    storage: '128 GB',
    ram: '8 GB',
    ratings: 4645743,
    reviews: 2722,
    originalPrice: 89999,
    discountPercentage: 55,
    offers: [
      '5% Unlimited Cashback on Flipkart Axis Bank Credit Card',
      'Extra ₹50000 off (price inclusive of cashback/coupon)',
      'Extra ₹500 off on Jewellery by Mia',
      'Spotify Premium - 12M at ₹699',
    ],
    Highlights:[
      '8 GB RAM | 128 GB ROM',
   '15.49 cm (6.1 inch) Full HD+ Display',
   '50MP + 10MP + 12MP | 12MP Front Camera',
'3900 mAh Lithium Ion Battery',
'Qualcomm Snapdragon 8 Gen 2 Processor'
    ]
  },
  
  
  ]


  constructor() { 
    let id = localStorage.getItem('itemName')
      console.log(id)
        this.product= this.product.filter(ele=>ele.id==Number(id))
     }

  ngOnInit() {
  }

}
