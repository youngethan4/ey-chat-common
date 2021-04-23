import { BaseEvent } from './base-event';
import { Topics } from './topics';

export interface ParticipantAddedEvent extends BaseEvent {
  topic: Topics.groupCreated;
  data: {
    groupId: string;
    username: string;
    groupName: string;
  };
}
