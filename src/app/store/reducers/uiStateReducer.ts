import { UiState, INITIAL_UI_STATE } from '../ui-state';
import { Action } from '@ngrx/store';
import { THREAD_SELECTED_ACTION, SELECT_USER_ACTION } from 'app/store/actions';
import { ApplicationState } from '../application-state';
import { SelectUserAction } from '../actions';

const handleSelectUserAction = (state: UiState, action: SelectUserAction): UiState => {
    const newUiState = Object.assign({}, state);
    newUiState.userId = action.payload;
    newUiState.currentThreadId = undefined;
    return newUiState;
};

export const uiState = (state: UiState = INITIAL_UI_STATE, action: Action) => {
    switch (action.type) {
        case THREAD_SELECTED_ACTION:
            const newUiState = Object.assign({}, state);
            newUiState.currentThreadId = action.payload;
            return newUiState;

        case SELECT_USER_ACTION:
            return handleSelectUserAction(state, action);

        default:
            return state;
    }
};

