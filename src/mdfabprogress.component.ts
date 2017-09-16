import { Input, Output, EventEmitter, Component, OnChanges, SimpleChanges } from '@angular/core';

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
  @Output() fabAction: EventEmitter<string> = new EventEmitter();

  active = true;
  done = false;

  constructor() {
  }

  public onClick() {
    if (!this.active && !this.done) {
      this.fabAction.emit('start');
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
