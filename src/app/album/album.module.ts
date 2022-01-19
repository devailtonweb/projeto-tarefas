import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlbumRoutingModule } from './album-routing.module';
import { AlbumComponent } from './album.component';
import { MatTableModule, MatButtonModule, MatIconModule, MatTooltipModule, MatPaginatorModule, MatCardModule, MatGridListModule, MatProgressSpinnerModule } from '@angular/material';

@NgModule({
  declarations: [AlbumComponent],
  imports: [
    CommonModule,
    AlbumRoutingModule,
    MatTableModule,
    MatButtonModule, 
    MatIconModule,
    MatTooltipModule, 
    MatPaginatorModule,
    MatCardModule,
    MatGridListModule,
    MatProgressSpinnerModule
  ]
})
export class AlbumModule { }
