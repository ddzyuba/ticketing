import { Subjects, Publisher, PaymentCreatedEvent } from '@ddtickets86/common';

export class PaymentCreatedPublisher extends Publisher<PaymentCreatedEvent> {
  subject: Subjects.PaymentCreated = Subjects.PaymentCreated;
}