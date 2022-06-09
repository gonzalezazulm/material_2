import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardDetalleComponent } from './card-detalle/card-detalle.component';
import { MaterialModule } from '../material/material.module';



@NgModule({
  declarations: [
    CardDetalleComponent
  ],
  exports:[
    CardDetalleComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ]
})
export class ComponentsModule { }
