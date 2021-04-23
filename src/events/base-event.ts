import { Topics } from './topics';

export interface BaseEvent {
  topic: Topics;
  data: any;
}
