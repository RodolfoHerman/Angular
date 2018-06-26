import { Component, OnInit, Input, ContentChild, AfterContentInit } from '@angular/core';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'mt-input-container',
  templateUrl: './input.component.html'
})
export class InputComponent implements OnInit, AfterContentInit {

  @Input() label: string;
  @Input() errorMessage: string;
  
  input: any;

  //Angular será capaz de injetar uma referência para essa diretiva, ou seja, o input da página "order.component.html" será injetado. Obs: necessário possuir a diretiva 'ngModel' no input
  @ContentChild(NgModel) model: NgModel;
  
  constructor() { }

  ngOnInit() {
  }

  //Método será chamado quando o conteúdo for definido, ou seja, quando o conteúdo que for ficar no <ng-content></ng-content> for definido.
  ngAfterContentInit() {

    //Injetando o input da página "order.component.html"
    this.input = this.model;

    if(this.input === undefined) {

      throw new Error("Esse componente precisa ser usado com um diretiva ngModel");
    }

  }

  hasSuccess(): boolean {

    return this.input.valid && (this.input.dirty || this.input.touched);
  }

  hasError(): boolean {

    return this.input.invalid && (this.input.dirty || this.input.touched);
  }

}
