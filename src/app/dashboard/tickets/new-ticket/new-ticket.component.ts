import { AfterViewInit, Component, ElementRef, OnInit, Output, ViewChild, output, viewChild } from '@angular/core';
import { ButtonComponent } from '../../../shared/button/button.component';
import { ControlComponent } from "../../../shared/control/control.component";
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-new-ticket',
    standalone: true,
    templateUrl: './new-ticket.component.html',
    styleUrl: './new-ticket.component.css',
    imports: [ButtonComponent, ControlComponent, FormsModule]
})
export class NewTicketComponent implements AfterViewInit, OnInit{

  //below is the old way of doing it
  @ViewChild('form') form?: ElementRef<HTMLFormElement>;
  // private form = viewChild.required<ElementRef<HTMLFormElement>>('form');
  enteredTitle = '';
  enteredText = '';

  add = output<{title: string, text: string}>();

  ngOnInit() {
    console.log('on init');
    console.log(this.form?.nativeElement);
  }

  ngAfterViewInit() {
    console.log('after view init');
    console.log(this.form?.nativeElement);
  }

  onSubmit() {
    // Do something
    this.add.emit({title: this.enteredTitle, text: this.enteredText});
    // this.form?.nativeElement.reset();
    this.enteredTitle = '';
    this.enteredText = '';
  }
}
