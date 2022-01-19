import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostRoutingModule } from './post-routing.module';
import { PostComponent } from './post.component';
import { MatTableModule, MatButtonModule, MatIconModule, MatTooltipModule, MatPaginatorModule } from '@angular/material';

@NgModule({
  declarations: [PostComponent],
  imports: [
    CommonModule,
    PostRoutingModule,
    MatTableModule,
    MatButtonModule, 
    MatIconModule,
    MatTooltipModule, 
    MatPaginatorModule
  ]
})
export class PostModule { }
