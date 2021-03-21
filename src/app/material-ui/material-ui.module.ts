import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';

export const components = [
  MatToolbarModule,
  MatIconModule,
  MatCardModule
];

@NgModule({
  imports: [components],
  exports: [components]
})
export class MaterialUIModule { }
