import { ApplicationState } from 'app/store/application-state';
import { Action } from '@ngrx/store';
import { INITIAL_APPLICATION_STATE } from '../application-state';
import { USER_THREADS_LOADED_ACTION } from '../actions';
import { uiState } from 'app/store/reducers/uiStateReducer';
import { uiStoreData } from 'app/store/reducers/uiStoreDataReducer';

export const storeReducer = (state: ApplicationState = INITIAL_APPLICATION_STATE, action: Action): ApplicationState => {

    return {
        uiState: uiState(state.uiState, action),
        storeData: uiStoreData(state.storeData, action)
    };
};
