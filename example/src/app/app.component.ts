import { Component } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { MdFABProgress } from 'md-fab-progress';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private $counter: Observable<number>;
  fabProgress: MdFABProgress;

  constructor() {
    this.fabProgress = new MdFABProgress();
    this.fabProgress.fab.icon = 'mic';
    this.fabProgress.fab.iconDone = '';
  }

  reset(event) {
    console.log('here');
    this.$counter = Observable.interval(1000)
      .take(5)
      .map(function (n) {
        const v = (n * 20) + 20;
        return v;
      });
    this.$counter.subscribe((x) => {
      this.fabProgress.progress.value = x;
      if (x === 100) {
        this.fabProgress.fab.icon = 'file_upload';
        this.fabProgress.progress.mode = 'indeterminate';
        setTimeout(() => {
          this.fabProgress.progress.mode = 'determinate';
          this.fabProgress.fab.iconDone = 'done';
          this.fabProgress.progress.value++;
          this.fabProgress.fab.color = 'done';
        }, 1500);
      }
    });
  }
}
