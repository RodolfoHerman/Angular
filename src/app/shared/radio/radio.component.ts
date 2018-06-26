import { Component, OnInit, Input, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

import { RadioOption } from './radio-option.model';

@Component({
  selector: 'mt-radio',
  templateUrl: './radio.component.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => RadioComponent),
      multi: true
    }
  ]
})
export class RadioComponent implements OnInit, ControlValueAccessor {

  @Input() options: RadioOption[];

  value: any;

  onChange: any;
  
  constructor() { }

  ngOnInit() {
  }

  setValue(value: any): void {

    this.value = value;

    //Avisa para as diretivas ques estão utilizando o componente que ele mudou de estado
    this.onChange(this.value);
  }

  //Será chamado pelas diretivas quando elas querem passar um valor para o componente
  writeValue(obj: any): void {

    this.value = obj;
  }

  //Passa uma função para o componente e essa função terá que ser chamada sempre que o valor interno do componente mudar
  registerOnChange(fn: any): void {

    this.onChange = fn;
  }  

  //Se o usuário entrou no componente
  registerOnTouched(fn: any): void {

  }

  setDisabledState?(disabled: boolean): void {

  }

}
