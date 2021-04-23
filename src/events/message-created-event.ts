import { BaseEvent } from './base-event';
import { Topics } from './topics';

export interface MessageCreatedEvent extends BaseEvent {
  topic: Topics.msgCreated;
  data: {
    groupId: string;
    sender: string;
    payload: string;
    createdAt: Date;
  };
}
