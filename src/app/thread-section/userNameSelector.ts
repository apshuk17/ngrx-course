import { ApplicationState } from '../store/application-state';

export const userNameSelector = (state: ApplicationState): string => {
    const currentUserId = state.uiState.userId;
    const currentParticipantId = state.storeData.participants[currentUserId];
    if (!currentParticipantId) {
        return '';
    }
    return currentParticipantId.name;
};
