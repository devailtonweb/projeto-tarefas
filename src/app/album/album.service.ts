import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { Album } from './album.model';

@Injectable({
  providedIn: 'root'
})
export class AlbumService {

  //para os metodos http que precise passar cabecalho
  private httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  constructor(
    private http: HttpClient
  ) { }

  getAlbums(): Observable<Album[]> {
    return this.http.get<Album[]>(`${environment.apiUrl}/albums`)
      .pipe(
        catchError(this.handleError('getAlbums', []))
      );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }

}
