import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MdButtonModule, MdIconModule, MdProgressSpinnerModule } from '@angular/material';
import { MdFabProgressComponent } from './mdfabprogress.component';

export * from './mdfabprogress.component';
export * from './mdfabprogress.class';

@NgModule({
  imports: [
    CommonModule,
    MdButtonModule,
    MdIconModule,
    MdProgressSpinnerModule
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
