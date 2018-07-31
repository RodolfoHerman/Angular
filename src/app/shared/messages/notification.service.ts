import { EventEmitter } from "@angular/core";


//Criar um SERVICE para que esteja disponível em toda a aplicação
export class NotificationService {

    notifier = new EventEmitter<string>();

    notify(message: string): void {

        this.notifier.emit(message);
    }
}