import { Kafka, Producer } from 'kafkajs';
import { BaseEvent } from './base-event';

export abstract class BaseProducer<T extends BaseEvent> {
  private producer: Producer;
  abstract topic: T['topic'];

  constructor(kafka: Kafka) {
    this.producer = kafka.producer({ allowAutoTopicCreation: true });
  }

  send = async (message: T['data']): Promise<void> => {
    await this.producer.connect();
    await this.producer.send({
      topic: this.topic,
      messages: [{ value: JSON.stringify(message) }],
    });
    return this.producer.disconnect();
  };
}
