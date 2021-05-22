import { Publisher, Subjects, TicketUpdatedEvent } from '@ddtickets86/common';

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
  subject: Subjects.TicketUpdated = Subjects.TicketUpdated;
}