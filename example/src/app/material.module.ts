import { NgModule } from '@angular/core';
import {
  MdButtonModule,
  MdCardModule,
  MdIconModule,
  MdProgressSpinnerModule,
  MdRadioModule
} from '@angular/material';

@NgModule({
  exports: [
    MdButtonModule,
    MdCardModule,
    MdIconModule,
    MdProgressSpinnerModule,
    MdRadioModule
  ]
})
export class AppMaterialModule { }
