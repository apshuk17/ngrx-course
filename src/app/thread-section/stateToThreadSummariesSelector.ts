import { ApplicationState } from '../store/application-state';
import * as _ from 'lodash';
import { Thread } from '../../../shared/model/thread';
import { ThreadSummaryVM } from './thread-summary.vm';

const mapToThreadSummariesSelector = (state: ApplicationState, thread: Thread): ThreadSummaryVM => {
    const names = _.keys(thread.participants).map(
        participantId => state.storeData.participants[participantId].name
    );

    const lastMessageId = _.last(thread.messageIds);
    const lastMessage = state.storeData.messages[lastMessageId];

    return {
            id: thread.id,
            participantsNames: _.join(names, ','),
            lastMessageText: lastMessage.text,
            timestamp: lastMessage.timestamp
            };
};

export const stateToThreadSummariesSelector = (state: ApplicationState): ThreadSummaryVM[] => {
    const threads = _.values<Thread>(state.storeData.threads);
    return threads.map(_.partial(mapToThreadSummariesSelector, state));
};
