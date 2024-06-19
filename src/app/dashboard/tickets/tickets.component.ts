import { Component } from '@angular/core';
import { NewTicketComponent } from "./new-ticket/new-ticket.component";
import { Ticket } from './ticket.model';
import { TicketComponent } from './ticket/ticket.component';

@Component({
    selector: 'app-tickets',
    standalone: true,
    templateUrl: './tickets.component.html',
    styleUrl: './tickets.component.css',
    imports: [NewTicketComponent, TicketComponent],
    host: {
        id: 'tickets'
    }
})
export class TicketsComponent {
  tickets: Ticket[] = [];

  onAdd(ticketdata: {title: string, text: string}) {
    const ticket: Ticket = {
      title: ticketdata.title,
      request: ticketdata.text,
      id: Math.random().toString(),
      status: 'open'
    };

    this.tickets.push(ticket);
  }

  onCloseTicket(id: string) {
    this.tickets = this.tickets.map(ticket => {
      if (ticket.id === id) {
        return {
          ...ticket,
          status: 'closed'
        };
      }
      return ticket;
    });
  }
}
