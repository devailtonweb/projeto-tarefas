import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlbumRoutingModule } from './album-routing.module';
import { AlbumComponent } from './album.component';
import { MatButtonModule, MatIconModule, MatTooltipModule, MatPaginatorModule, MatCardModule } from '@angular/material';

@NgModule({
  declarations: [AlbumComponent],
  imports: [
    CommonModule,
    AlbumRoutingModule,
    MatButtonModule, 
    MatIconModule,
    MatTooltipModule, 
    MatPaginatorModule,
    MatCardModule
  ]
})
export class AlbumModule { }
