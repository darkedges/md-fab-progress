# md-fab-progress

This work is a port and enhancement of [https://codepen.io/mindstorm/pen/ezJZzJ](https://codepen.io/mindstorm/pen/ezJZzJ) developed by [https://codepen.io/mindstorm/](https://codepen.io/mindstorm/)

The enhancement is to an additional action to the Progress Spinner Floating Action Button.

## Installation

To install this library, run:

```bash
$ npm install md-fab-progress --save
```

## Consuming your library

Once you have published your library to npm, you can import your library in any Angular application by running:

```bash
$ npm install md-fab-progress @angular/animations @angular/material @angular/cdk --save
```

*note*: `@angular/material` requires `@angular` at version ^4.4.1

create a file `material.module.ts`

```typescript
import {NgModule} from '@angular/core';
import {
  MatButtonModule,
  MatCardModule,
  MatIconModule,
  MatProgressSpinnerModule,
  MatRadioModule
} from '@angular/material';

@NgModule({
  exports: [
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatRadioModule
  ]
})
export class AppMaterialModule {}

```

and then from your Angular `AppModule`:

```typescript
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MdFabProgressModule } from '@darkedegs/md-fab-progress';

import { AppComponent } from './app.component';
import { AppMaterialModule } from './material.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MdFabProgressModule,
    AppMaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

Once the component is imported use the following:

`index.html`
```typescript
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>ProgressSpinner</title>
  <base href="/">

  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="icon" type="image/x-icon" href="favicon.ico">
  <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
</head>
<body>
  <app-root></app-root>
</body>
</html>
```

`styles.css`

```css
/* You can add global styles to this file, and also import other style files */
@import "~@angular/material/prebuilt-themes/indigo-pink.css";

```


`app.component.ts`

```typescript
import { Component } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { MdFABProgress } from '@darkedges/md-fab-progress';

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
```

`app.component.html`

```xml
<!-- You can now use your library component in app.component.html -->
<mat-card>
  <mat-card-content>
    <md-fab-progress [fabColor]="fabProgress.fab.color" [progressColor]="fabProgress.progress.color" [fabIcon]="fabProgress.fab.icon"
      [fabIconDone]="fabProgress.fab.iconDone" [progressValue]="fabProgress.progress.value" [progressMode]="fabProgress.progress.mode"
      (fabAction)="reset($event)"></md-fab-progress>
  </mat-card-content>
</mat-card>
```

## Attributes

 Attribute | Description
-----------|-----------
`fabColor`| The `color` to be used for the FAB.
`fabIcon` | Name of the icon in the SVG icon set for the initial entry.
`fabIconDone` | Name of the icon in the SVG icon set for when everything has completed.
`fabAction` | The function to call when the FAB is clicked.
`progressColor` | The `color` to be used for the Progress Spinner.
`progressMode` | The `mode` of the Progress Spinner. Either `determinate` or `indeterminate`
`progressValue` | The current value for the Progress Spinner. Number between `0` and `100`

## Example

There is an example in the [example](example) directory. It requires `angular-cli`. Start by issuing the following.

```bash
cd example
npm install -g @angular/cli
npm install
ng serve --preserve-symlink
```

## Development

To generate all `*.js`, `*.d.ts` and `*.metadata.json` files:

```bash
$ npm run build
```

To lint all `*.ts` files:

```bash
$ npm run lint
```

## License

MIT © [Nicholas Irving](mailto:developer@darkedges.com)
