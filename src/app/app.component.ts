import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
 
  //breakpoint de interrupção do layout de material angular. Redimenciona de acordo com device que esta sendo utilizado. 
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
  .pipe(
    map(result => result.matches)
  );

  menu: Array<any> = [
    {name: "Tarefas", route: "/Todo/List", icon: "assignment" },
    {name: "Álbum", route: "/Album/List", icon: "collections"  },
    {name: "Postagem", route: "/Post/List", icon: "drive_file_rename_outline" }
  ];
  titleModule: string;

  constructor(
    private breakpointObserver: BreakpointObserver,
    private router: Router,
  ) { }

  setName(title: string): void {
    this.titleModule = title;
  }

  ngOnInit() {
    this.router.events.subscribe(val => {
      if (val instanceof NavigationEnd) {
        if(val.url) {
          this.titleModule = this.menu.filter(res => res.route == val.url)[0].name;
        }
      }
    });
  }

}
