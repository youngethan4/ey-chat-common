import { BaseEvent } from './base-event';
import { Topics } from './topics';

export interface GroupDeletedEvent extends BaseEvent {
  topic: Topics.groupDeleted;
  data: {
    id: string;
  };
}
