import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { Album } from './album.model';
import { AlbumService } from './album.service';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.scss']
})
export class AlbumComponent implements OnInit, OnDestroy  {

  albums: Album[];
  subscription: Subscription;

  constructor(
    private albumService: AlbumService
  ) { }

  ngOnInit() {
    this.subscription = this.albumService.getAlbums()
    .subscribe(res => 
      this.albums = res
    )
  }

  //Destroy a subscrição para não gerar estouro de memória
  ngOnDestroy() { 
    this.subscription.unsubscribe();
  } 

}
