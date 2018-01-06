import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ApplicationState } from '../store/application-state';
import { Observable } from 'rxjs/Observable';
import { MessageVM } from 'app/message-section/message.vm';
import { messageParticipantNamesSelector } from './messageParticipantNamesSelector';
import { messagesSelector } from 'app/message-section/messagesSelector';


@Component({
  selector: 'message-section',
  templateUrl: './message-section.component.html',
  styleUrls: ['./message-section.component.css']
})
export class MessageSectionComponent implements OnInit {

  participantsName$: Observable<string>;
  messages$: Observable<MessageVM[]>;

  constructor(private store: Store<ApplicationState>) { }

  ngOnInit() {
    this.participantsName$ = this.store.select(messageParticipantNamesSelector);
    this.messages$ = this.store.select(messagesSelector);
    // this.messages$.subscribe(console.log);
  }

}
