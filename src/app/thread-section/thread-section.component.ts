import { Component, OnInit } from '@angular/core';
import {ThreadsService} from '../services/threads.service';
import { Store } from '@ngrx/store';
import { ApplicationState } from '../store/application-state';
import { LoadUserThreadsAction, ThreadSelectedAction } from '../store/actions';

import { Observable } from 'rxjs';
import { Thread } from '../../../shared/model/thread';
import { ThreadSummaryVM } from './thread-summary.vm';
import { userNameSelector } from './userNameSelector';
import { mapStateToUnreadMessagesCounter } from './mapStateToUnreadMessagesCounter';
import { stateToThreadSummariesSelector } from './stateToThreadSummariesSelector';
import * as _ from 'lodash';

@Component({
  selector: 'thread-section',
  templateUrl: './thread-section.component.html',
  styleUrls: ['./thread-section.component.css']
})
export class ThreadSectionComponent implements OnInit {

  userName$: Observable<string>;
  unreadMessagesCounter$: Observable<number>;
  threadSummaries$: Observable<ThreadSummaryVM[]>;

  constructor( private store: Store<ApplicationState> ) {
  }

  onThreadSelected(selectedThreadId: number) {
    this.store.dispatch(new ThreadSelectedAction(selectedThreadId));
  }

  ngOnInit() {

    this.userName$ = this.store.select(userNameSelector);

    this.unreadMessagesCounter$ = this.store.select(mapStateToUnreadMessagesCounter);

    this.threadSummaries$ = this.store.select(stateToThreadSummariesSelector);

    this.store.dispatch(new LoadUserThreadsAction());

  }

}
