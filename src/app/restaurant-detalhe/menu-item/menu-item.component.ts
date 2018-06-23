import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MenuItem } from './menu-item.model';

@Component({
  selector: 'mt-menu-item',
  templateUrl: './menu-item.component.html'
})
export class MenuItemComponent implements OnInit {

  //Toda vez que temos uma propriedade que será fornecdio pelo componente parent é necessário marcar com INPUT
  @Input() menuItem: MenuItem;

  @Output() add = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  emitAddEvent() {

    //Fornece para o componente parent o objeto que foi clicado
    this.add.emit(this.menuItem);
  }


}
