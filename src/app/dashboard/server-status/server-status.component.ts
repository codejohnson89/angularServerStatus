import { Component, DestroyRef, OnDestroy, OnInit, effect, inject, signal } from '@angular/core';

@Component({
  selector: 'app-server-status',
  standalone: true,
  imports: [],
  templateUrl: './server-status.component.html',
  styleUrl: './server-status.component.css',
  host: {
    id: 'status'
  }
})
export class ServerStatusComponent implements OnInit{
  currentStatus = signal<'online' | 'offline' | 'unknown'>('online');
  // private interval?: NodeJS.Timeout;
  private destroyRef = inject(DestroyRef);

  constructor() {
    effect(() => {
      console.log(this.currentStatus());
    });
  }

  ngOnInit() {
    const interval = setInterval(() => {
      const rnd = Math.random();

      if (rnd < 0.5) {
        this.currentStatus.set('online');
      } else if (rnd > 0.9) {
        this.currentStatus.set('offline');
      } else {
        this.currentStatus.set('unknown');
      }
  }, 5000);


  //This is the "Angular way" of cleaning up resources version 16 and up only
  this.destroyRef.onDestroy(() => {
    clearInterval(interval);
  })
  }

  // ngOnDestroy() {
  //   clearInterval(this.interval);
  // }

}
