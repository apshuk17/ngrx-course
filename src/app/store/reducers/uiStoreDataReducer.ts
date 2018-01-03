import { StoreData, INITIAL_STORE_DATA } from '../store-data';
import { Action } from '@ngrx/store';
import { USER_THREADS_LOADED_ACTION, UserThreadsLoadedAction } from '../actions';
import * as _ from 'lodash';

export const handleLoadUserThreadsAction =
(state: StoreData = INITIAL_STORE_DATA, action: UserThreadsLoadedAction): StoreData => {
    const userData = action.payload;

    return {
        participants: _.keyBy(userData.participants, 'id'),
        threads: _.keyBy(userData.threads, 'id'),
        messages: _.keyBy(userData.messages, 'id')
    };
};

export const uiStoreData = (state: StoreData, action: Action) => {
    switch (action.type) {
        case USER_THREADS_LOADED_ACTION:
            return handleLoadUserThreadsAction(state, action);

        default:
            return state;
    }
};