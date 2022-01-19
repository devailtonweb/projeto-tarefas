import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { take } from 'rxjs/operators';

import { Album } from './album.model';
import { AlbumService } from './album.service';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.scss']
})
export class AlbumComponent implements OnInit {

  albums: Album[];
  displayedColumns: string[] = ['id', 'post', 'control'];
  dataSource: MatTableDataSource<Album>;

  @ViewChild(MatPaginator,  { static: true }) paginator: MatPaginator;

  constructor(
    private albumService: AlbumService
  ) { }

  ngOnInit() {
    this.albumService.getAlbums()
    .subscribe(res => {
      this.albums = res;
      this.dataSource = new MatTableDataSource<Album>(res);
      this.dataSource.paginator = this.paginator;
    },
    (err) => {
      console.log(err);
    }
    )
  }

}
