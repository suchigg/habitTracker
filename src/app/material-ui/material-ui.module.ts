import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';

export const components = [
  MatToolbarModule,
  MatIconModule
];

@NgModule({
  imports: [components],
  exports: [components]
})
export class MaterialUIModule { }
