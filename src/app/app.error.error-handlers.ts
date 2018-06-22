import { Response } from "@angular/http";
import { Observable } from "rxjs/Observable";



export class ErrorHandler {

    public static handleError(response: Response | any) {

        let errorMessage: string;

        if(response instanceof Response) {

            errorMessage = `Error ${response.status} ao acessar a URL: ${response.url} - ${response.statusText}`;

        } else {

            errorMessage = response.toString();
        }

        console.log(errorMessage);
        return Observable.throw(errorMessage);
    }


}