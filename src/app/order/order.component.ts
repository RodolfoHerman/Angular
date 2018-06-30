import { Component, OnInit } from '@angular/core';
import { RadioOption } from '../shared/radio/radio-option.model';
import { OrderService } from './order.service';
import { CartItem } from '../restaurant-detalhe/shopping-cart/cart-item.model';
import { Order, OrderItem } from './order.model';

@Component({
  selector: 'mt-order',
  templateUrl: './order.component.html'
})
export class OrderComponent implements OnInit {

  //Em uma palicação real estariamos realizando a requisição do valor do frete no backend
  delivery: number = 8; 
  
  paymentOptions: RadioOption[] = [
    {label: 'Dinheiro', value: 'MON'},
    {label: 'Cartão de Débito', value: 'DEB'},
    {label: 'Cartão Refeição', value: 'REF'}
  ];

  constructor(private orderService: OrderService) { }

  ngOnInit() {
  }

  itemsValue(): number {

    return this.orderService.itemsValue();
  }

  cartItems(): CartItem[] {

    return this.orderService.cartItems();
  }

  increaseQty(item: CartItem): void {

    this.orderService.increaseQty(item);
  }

  decreaseQty(item: CartItem): void {

    this.orderService.decreaseQty(item);
  }

  remove(item: CartItem): void {

    this.orderService.remove(item);
  }

  checkOrder(order: Order) {

    order.orderItems = this.cartItems()
                        .map((item: CartItem)=> new OrderItem(item.quantity, item.menuItem.id));
    
    this.orderService.checkOrder(order).subscribe((orderId: string) => {

      console.log(orderId);
      this.orderService.clear()
    });
  }

}
