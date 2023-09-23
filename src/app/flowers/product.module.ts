import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlowersComponent } from './flowers.component';
import { FlowersDetailComponent } from './flowers-detail.component';
import { ConvertAtoBPipe } from './convert-ato-b.pipe';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    FlowersComponent,
    FlowersDetailComponent, 
    ConvertAtoBPipe
  ],
  imports: [
    RouterModule.forChild([
      {path:'flowers', component:FlowersComponent},
      {path:'product/:id',component:FlowersDetailComponent}
    ]),
    SharedModule,
   
  ]
})
export class ProductModule { }
