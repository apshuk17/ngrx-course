import { Injectable } from '@angular/core';
import { ThreadsService } from '../../services/threads.service';
import { Actions, Effect } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { LOAD_USER_THREADS_ACTION, UserThreadsLoadedAction } from '../actions';

import { Observable } from 'rxjs/Observable';


@Injectable()
export class LoadThreadsEffectService {

  @Effect() userThreads$: Observable<Action> = this.actions$.ofType(LOAD_USER_THREADS_ACTION)
                          .switchMap(() => this.threadsService.loadUserThreads())
                          .map((allUserData) => new UserThreadsLoadedAction(allUserData));

  constructor(private actions$: Actions, private threadsService: ThreadsService) { }


}
