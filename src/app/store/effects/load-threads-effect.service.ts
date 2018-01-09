import { Injectable } from '@angular/core';
import { ThreadsService } from '../../services/threads.service';
import { Actions, Effect } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { LOAD_USER_THREADS_ACTION, UserThreadsLoadedAction, SELECT_USER_ACTION, LoadUserThreadsAction, SelectUserAction } from '../actions';

import { Observable } from 'rxjs/Observable';


@Injectable()
export class LoadThreadsEffectService {

  @Effect() userThreads$: Observable<Action> = this.actions$.ofType(LOAD_USER_THREADS_ACTION)
                          .switchMap((action: LoadUserThreadsAction) => this.threadsService.loadUserThreads(action.payload))
                          .map((allUserData) => new UserThreadsLoadedAction(allUserData));

  @Effect() newUserSelected$: Observable<Action> = this.actions$.ofType(SELECT_USER_ACTION)
                                                    .map((action: SelectUserAction) => new LoadUserThreadsAction(action.payload));

  constructor(private actions$: Actions, private threadsService: ThreadsService) { }


}
