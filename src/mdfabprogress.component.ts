import { Input, Output, EventEmitter, Component, OnChanges, SimpleChanges } from '@angular/core';
import { MdFABProgressEvent } from './mdfabprogressevent.class';

@Component({
  selector: 'md-fab-progress',
  templateUrl: './mdfabprogress.component.html',
  styleUrls: ['./mdfabprogress.component.scss'],
})
export class MdFabProgressComponent implements OnChanges {
  @Input() fabColor = 'accent';
  @Input() fabIcon = '<';
  @Input() fabIconDone = '';
  @Input() iconDoneSuccess = true;
  @Input() progressColor = 'primary';
  @Input() progressMode = 'determinate';
  @Input() progressValue = 50;
  @Output() fabAction: EventEmitter<Event> = new EventEmitter();

  active = true;
  done = false;

  constructor() {
  }

  public onClick(event: Event) {
    if (!this.active && !this.done) {
      event.preventDefault();
      event.stopPropagation();
      this.fabAction.emit(event);
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.progressValue) {
      const newValue = changes.progressValue.currentValue;
      if (newValue >= 100) {
        if (this.fabIconDone !== '') {
          this.done = true;
          this.active = false;
        }
      } else if (newValue === 0) {
        this.done = false;
        this.active = false;
      } else if (!this.active) {
        this.active = true;
      }
    }
  }

}
