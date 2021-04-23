import { Consumer, Kafka } from 'kafkajs';
import { BaseEvent } from './base-event';

export abstract class BaseConsumer<T extends BaseEvent> {
  protected consumer: Consumer;
  abstract topic: T['topic'];
  abstract onMessage(data: T['data']): void;

  constructor(kafka: Kafka) {
    this.consumer = kafka.consumer({
      groupId: '1',
      allowAutoTopicCreation: true,
    });
  }

  listen = async (): Promise<void> => {
    await this.consumer.connect();
    await this.consumer.subscribe({ topic: this.topic });
    return this.consumer.run({
      eachMessage: async ({ message, topic }) => {
        console.log('Message recieved: ', topic);
        const value = message.value!.toString();
        const data: T['data'] = JSON.parse(value);
        this.onMessage(data);
      },
    });
  };
}
