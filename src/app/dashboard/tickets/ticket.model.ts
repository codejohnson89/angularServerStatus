export interface Ticket {
  title: string;
  request: string;
  id: string;
  status: 'open' | 'closed';
}
