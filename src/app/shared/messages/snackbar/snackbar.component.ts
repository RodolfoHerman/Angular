import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { NotificationService } from '../notification.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/timer';

@Component({
  selector: 'mt-snackbar',
  templateUrl: './snackbar.component.html',
  styleUrls: ['./snackbar.component.css'],
  animations: [
    trigger('snack-visibility', [
      state('hiden', style({
        opacity: 0,
        bottom: '0px'
      })),
      state('visible', style({
        opacity: 1,
        bottom: '30px'
      })),
      transition('hiden => visible', animate('500ms 0s ease-in')),
      transition('visible => hiden', animate('500ms 0s ease-out'))
    ])
  ]
})
export class SnackbarComponent implements OnInit {

  message: string;

  snackVisibility: string = 'hiden';

  constructor(private notificationService: NotificationService) { }

  ngOnInit() {

    this.notificationService.notifier.subscribe(message => {
      this.message = message;
      this.snackVisibility = 'visible';
      Observable.timer(3000).subscribe(timer => this.snackVisibility = 'hiden');
    })
  }

}
