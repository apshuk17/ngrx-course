import { ApplicationState } from 'app/store/application-state';
import { Thread } from '../../../shared/model/thread';
import * as _ from 'lodash';


export const buildThreadParticipantsList = (state: ApplicationState, thread: Thread): string => {
    const names = _.keys(thread.participants).map(participantId => {
        return state.storeData.participants[participantId].name;
    });
    return _.join(names, ',');
};