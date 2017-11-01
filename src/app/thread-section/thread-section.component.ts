import { Component, OnInit } from '@angular/core';
import {ThreadsService} from '../services/threads.service';
import { Store } from '@ngrx/store';
import { ApplicationState } from '../store/application-state';
import { LoadUserThreads } from '../store/actions';

import { Observable } from 'rxjs';
import { Thread } from '../../../shared/model/thread';
import * as _ from 'lodash';


@Component({
  selector: 'thread-section',
  templateUrl: './thread-section.component.html',
  styleUrls: ['./thread-section.component.css']
})
export class ThreadSectionComponent implements OnInit {

  userName$: Observable<string>;
  unreadMessagesCounter$: Observable<number>;

  constructor(private threadsService: ThreadsService,
              private store: Store<ApplicationState>) {
  }

  mapStateToUserName(state: ApplicationState): string {
    return state.storeData.participants[state.uiState.userId].name;
  };

  mapStateToUnreadMessagesCounter(state: ApplicationState): number {

    const currentUserId: number = state.uiState.userId;
    return _.values<Thread>(state.storeData.threads)
    .reduce((acc, thread) => acc + thread.participants[currentUserId], 0);
  };

  ngOnInit() {

    this.userName$ = this.store.skip(1).map(this.mapStateToUserName);

    this.unreadMessagesCounter$ = this.store.skip(1).map(this.mapStateToUnreadMessagesCounter);

    this.threadsService.loadUserThreads().subscribe(
      allUserData => this.store.dispatch(
        new LoadUserThreads(allUserData)
      )
    );

  }

}
