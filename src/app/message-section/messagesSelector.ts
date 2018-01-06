import { ApplicationState } from 'app/store/application-state';
import { Message } from '../../../shared/model/message';
import { MessageVM } from './message.vm';
import * as _ from 'lodash';

const mapMessageToMessageVM = (state: ApplicationState, message: Message): MessageVM => {
    return {
        id: message.id,
        text: message.text,
        timestamp: message.timestamp,
        participantName: state.storeData.participants[message.participantId].name
    }
};

export const messagesSelector = (state: ApplicationState): MessageVM[] => {
    const currentThreadId = state.uiState.currentThreadId;
    if (!currentThreadId) { return []; };
    const messageIds = state.storeData.threads[currentThreadId].messageIds;
    const messages = messageIds.map(messageId => {
        return state.storeData.messages[messageId];
    });
    return messages.map(_.partial(mapMessageToMessageVM, state));
};
