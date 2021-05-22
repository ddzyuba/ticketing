import { Publisher, OrderCreatedEvent, Subjects } from '@ddtickets86/common';

export class OrderCreatedPublisher extends Publisher<OrderCreatedEvent> {
  subject: Subjects.OrderCreated = Subjects.OrderCreated;
}