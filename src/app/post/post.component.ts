import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

import { Post } from './post.model';
import { PostService } from './post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  posts: Post[];
  displayedColumns: string[] = ['id', 'post', 'control'];
  dataSource: MatTableDataSource<Post>;

  @ViewChild(MatPaginator,  { static: true }) paginator: MatPaginator;

  constructor(
    private postService: PostService
  ) { }

  ngOnInit() {
    this.postService.getPosts()
    .subscribe(res => {
      this.posts = res;
      this.dataSource = new MatTableDataSource<Post>(res);
      this.dataSource.paginator = this.paginator;
    },
    (err) => {
      console.log(err);
    }
    )
  }

}
