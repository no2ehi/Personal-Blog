import { NgModule } from '@angular/core';
import {
  MatToolbarModule,
  MatButtonModule,
  MatCardModule,
} from '@angular/material';

@NgModule({
  imports: [
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
  ],
  exports: [
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
  ]
})
export class MaterialModule { }
