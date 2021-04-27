import { BaseEvent } from './base-event';
import { Topics } from './topics';

export interface ParticipantAddedEvent extends BaseEvent {
  topic: Topics.participantAdded;
  data: {
    username: string;
    group: {
      id: string;
      name: string;
    };
  };
}
