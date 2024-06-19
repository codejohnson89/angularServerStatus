import { AfterContentInit, Component, ContentChild, ElementRef, HostBinding, HostListener, ViewEncapsulation, afterNextRender, afterRender, contentChild, inject, input } from '@angular/core';

@Component({
  selector: 'app-control',
  standalone: true,
  imports: [],
  templateUrl: './control.component.html',
  styleUrl: './control.component.css',
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'control',
    '(click)': 'onClick()'
  }
})
export class ControlComponent implements AfterContentInit {
  // @HostBinding('class') className = 'control';
  // @HostListener('clcik')
  label = input.required<string>();
  private el = inject(ElementRef);
  // below is the old way of doing it
  // @ContentChild('input') private control?: ElementRef<HTMLInputElement | HTMLTextAreaElement>;
  private control = contentChild<ElementRef<HTMLInputElement | HTMLTextAreaElement>>('input');

  constructor() {
    afterRender(() => {
      console.log('ControlComponent after render');
    });

    afterNextRender(() => {
      console.log('ControlComponent after next render');
    });

  }

  ngAfterContentInit() {
    console.log('ControlComponent after content init');
    console.log(this.control());
  }

  onClick() {
      console.log('ControlComponent clicked');
      console.log(this.el)
      console.log(this.control())
    }
}
