import { Action } from '@ngrx/store';
import { AllUserData } from '../../../shared/to/all-user-data';
import { ApplicationState, INITIAL_APPLICATION_STATE } from './application-state';
import * as _ from 'lodash';

export const LOAD_USER_THREADS_ACTION = 'LOAD_USER_THREADS_ACTION';

const handleLoadUserThreadsAction =
(state: ApplicationState, action: LoadUserThreads): ApplicationState => {
    const userData = action.payload;

    const newState = Object.assign({}, state);
    newState.storeData = {
        participants: _.keyBy(userData.participants, 'id'),
        threads: _.keyBy(userData.threads, 'id'),
        messages: _.keyBy(userData.messages, 'id')
    };
    console.log(newState);
    return newState;
};

export class LoadUserThreads implements Action {

    readonly type: string = LOAD_USER_THREADS_ACTION;

    constructor(public payload?: AllUserData) {}
};

export const storeReducer = 
(state: ApplicationState = INITIAL_APPLICATION_STATE, action: Action): ApplicationState => {
    switch(action.type) {
        case LOAD_USER_THREADS_ACTION:
            return handleLoadUserThreadsAction(state, action);

        default:
            return state;

    }
};
