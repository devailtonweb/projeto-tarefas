import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';

const routes: Routes = [
  { 
    path: '', 
    redirectTo: '/Todo/List', 
    pathMatch: 'full'
  },
  {
    path: 'Todo',
    loadChildren: () => import('./todo/todo.module').then(m => m.TodoModule)
  },  
  {
    path: 'Album',
    loadChildren: () => import('./album/album.module').then(m => m.AlbumModule)
  },
  {
    path: 'Post',
    loadChildren: () => import('./post/post.module').then(m => m.PostModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [{ provide: APP_BASE_HREF, useValue: '/' }]
})
export class AppRoutingModule { }
