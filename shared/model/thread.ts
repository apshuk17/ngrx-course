

export interface Thread {

    id: number;
    messageIds: number[];
    // number of unread messages per participant
    participants: {[key: number]: number};

}