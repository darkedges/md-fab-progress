import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MdFabProgressComponent } from './mdfabprogress.component';

export * from './mdfabprogress.component';
export * from './mdfabprogress.class';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    MdFabProgressComponent
  ],
  exports: [
    MdFabProgressComponent,
  ]
})
export class SampleModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SampleModule
    };
  }
}
