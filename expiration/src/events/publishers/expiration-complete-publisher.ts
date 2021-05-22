import { Subjects, Publisher, ExpirationCompleteEvent } from '@ddtickets86/common';

export class ExpirationCompletePublisher extends Publisher<
  ExpirationCompleteEvent
> {
  subject: Subjects.ExpirationComplete = Subjects.ExpirationComplete;
}