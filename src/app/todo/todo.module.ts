import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodoRoutingModule } from './todo-routing.module';
import { TodoComponent } from './todo.component';
import { MatTableModule, MatButtonModule, MatIconModule, MatTooltipModule, MatPaginatorModule } from '@angular/material';

@NgModule({
  declarations: [
    TodoComponent
  ],
  imports: [
    CommonModule,
    TodoRoutingModule,
    MatTableModule,
    MatButtonModule, 
    MatIconModule,
    MatTooltipModule, 
    MatPaginatorModule
  ]
})
export class TodoModule { }
