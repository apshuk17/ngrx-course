import { Action } from '@ngrx/store';
import { AllUserData } from '../../../shared/to/all-user-data';
import { ApplicationState, INITIAL_APPLICATION_STATE } from './application-state';
import * as _ from 'lodash';

export const USER_THREADS_LOADED_ACTION = 'USER_THREADS_LOADED_ACTION';
export const LOAD_USER_THREADS_ACTION = 'LOAD_USER_THREADS_ACTION';
export const THREAD_SELECTED_ACTION = 'THREAD_SELECTED_ACTION';
export const SELECT_USER_ACTION = 'SELECT_USER_ACTION';


export class LoadUserThreadsAction implements Action {
    readonly type: string = LOAD_USER_THREADS_ACTION;

    constructor(public payload?: number) {}
}

export class UserThreadsLoadedAction implements Action {

    readonly type: string = USER_THREADS_LOADED_ACTION;

    constructor(public payload?: AllUserData) {}
};

export class ThreadSelectedAction implements Action {
    readonly type: string = THREAD_SELECTED_ACTION;

    constructor(public payload?: number) {}
}

export class SelectUserAction implements Action {
    readonly type: string = SELECT_USER_ACTION;

    constructor(public payload?: number) {}
}

