import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { Workout } from '../models/workout';

@Injectable({
  providedIn: 'root'
})
export class ExerciseService {

  url = environment.baseUrl + "api/exercises";
  constructor(private http: HttpClient) { }


  create(todo: Workout): Observable<Workout> {
    return this.http.post<Workout>(this.url, todo ).pipe(
      catchError((err: any) => {
        console.log(err);
        return throwError(
          () =>
            new Error('TodoService.index(): error creating Todo item: ' + err)
        );
      })
    );
  }

  update(todo: Workout): Observable<Workout> {
    return this.http.put<Workout>(`${this.url}/${todo.id}`, todo ).pipe(
      catchError((err: any) => {
        console.log(err);
        return throwError(
          () =>
            new Error('TodoService.update(): error updating todo item: ' + err)
        );
      })
    );
  }

  destroy(id: number): Observable<void> {
    return this.http
      .delete<void>(`${this.url}/${id}` )
      .pipe(
        catchError((err: any) => {
          console.log(err);
          return throwError(
            () =>
              new Error(
                'TodoService.update(): error updating todo item: ' + err
              )
          );
        })
      );
  }
}
