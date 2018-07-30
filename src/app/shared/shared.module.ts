import { NgModule } from "@angular/core";

import { InputComponent } from "./input/input.component";
import { RadioComponent } from "./radio/radio.component";
import { RatingComponent } from "./rating/rating.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { SnackbarComponent } from './messages/snackbar/snackbar.component';


@NgModule({
    declarations: [InputComponent, RadioComponent, RatingComponent, SnackbarComponent],
    //Modulos de dependências do módulo (os componentes utilizam)
    imports: [FormsModule, ReactiveFormsModule, CommonModule],
    //Quem importar o atual modulo também importará essas dependencias
    exports: [InputComponent, RadioComponent, RatingComponent, SnackbarComponent,
        FormsModule, ReactiveFormsModule, CommonModule]
})
export class SharedModule {

}