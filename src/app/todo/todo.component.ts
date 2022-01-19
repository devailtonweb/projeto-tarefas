import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

import { Todo } from './todo.model';
import { TodoService } from './todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  todos: Todo[];
  displayedColumns: string[] = ['id', 'title', 'completed', 'control'];
  dataSource: MatTableDataSource<Todo>;

  @ViewChild(MatPaginator,  { static: true }) paginator: MatPaginator;

  constructor(
    private todoService: TodoService
  ) { }

  ngOnInit() {
    this.todoService.getTodos()
    .subscribe(res => {
      this.dataSource = new MatTableDataSource<Todo>(res);
      this.dataSource.paginator = this.paginator;
    }, err => {
      console.log(err);
    });
  }

}
