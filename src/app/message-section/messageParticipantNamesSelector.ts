import { ApplicationState } from 'app/store/application-state';
import { Thread } from '../../../shared/model/thread';
import { buildThreadParticipantsList } from './buildThreadParticipantsList';

export const messageParticipantNamesSelector = (state: ApplicationState) => {
    const currentThreadId = state.uiState.currentThreadId;
    const currentThread: Thread = state.storeData.threads[currentThreadId];
    return currentThread ? buildThreadParticipantsList(state, currentThread) : '';
};