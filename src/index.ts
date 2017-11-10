import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatIconModule, MatProgressSpinnerModule } from '@angular/material';
import { MdFabProgressComponent } from './mdfabprogress.component';

export * from './mdfabprogress.component';
export * from './mdfabprogress.class';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatProgressSpinnerModule
  ],
  declarations: [
    MdFabProgressComponent
  ],
  exports: [
    MdFabProgressComponent
  ]
})
export class MdFabProgressModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: MdFabProgressModule
    };
  }
}
