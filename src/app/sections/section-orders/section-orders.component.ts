import { Component, OnInit } from '@angular/core';
import { Order } from '../../shared/order';

@Component({
  selector: 'app-section-orders',
  templateUrl: './section-orders.component.html',
  styleUrls: ['./section-orders.component.css']
})
export class SectionOrdersComponent implements OnInit {

  constructor() { }

  orders: Order[] = [
    {id:1, customer:{id:1, name:'Maint St Bakery', state:'CO', email:'main@bakery.com'}, total:230, placed: new Date(2020, 12 ,1),fullfilled: new Date(2020,13,2), status:'Completed'  },
    {id:2, customer:{id:2, name:'Maint St Bakery', state:'CO', email:'main@bakery.com'}, total:230, placed: new Date(2020, 12 ,1),fullfilled: new Date(2020,13,2), status:'Completed'  },
    {id:3, customer:{id:3, name:'Maint St Bakery', state:'CO', email:'main@bakery.com'}, total:230, placed: new Date(2020, 12 ,1),fullfilled: new Date(2020,13,2), status:'Completed'  },
    {id:4, customer:{id:4, name:'Maint St Bakery', state:'CO', email:'main@bakery.com'}, total:230, placed: new Date(2020, 12 ,1),fullfilled: new Date(2020,13,2), status:'Completed'  },
    {id:5, customer:{id:5, name:'Maint St Bakery', state:'CO', email:'main@bakery.com'}, total:230, placed: new Date(2020, 12 ,1),fullfilled: new Date(2020,13,2), status:'Completed'  }
  ]

  ngOnInit(): void {
  }

}
