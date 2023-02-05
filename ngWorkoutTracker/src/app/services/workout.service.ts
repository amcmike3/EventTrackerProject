import { Workout } from './../models/workout';
import { environment } from 'src/environments/environment.development';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WorkoutService {


  url = environment.baseUrl + "api/workouts";
  constructor(private http: HttpClient) { }



  index(): Observable<Workout[]> {
    // return this.http.get<Todo[]>(this.url).pipe(
    return this.http.get<Workout[]>(this.url).pipe(
      catchError((err: any) => {
        console.log(err);
        return throwError(
          () =>
            new Error('TodoService.index(): error retrieving Todo list: ' + err)
        );
      })
    );
  }

  show(todoId: number): Observable<Workout> {
    return this.http
      .get<Workout>(`${this.url}/${todoId}`)
      .pipe(
        catchError((err: any) => {
          console.log(err);
          return throwError(
            () =>
              new Error(
                'TodoService.show(): error retrieving Todo id#: ' +
                  todoId +
                  ', ' +
                  err
              )
          );
        })
      );
  }

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
    // if (todo.completed) {
    //   (todo.completeDate = this.datePipe.transform(Date.now(), 'shortDate')),
    //     this.getHttpOptions();
    // } else {
    //   todo.completeDate = '';
    //   console.log(todo.task + ' is incomplete: ' + todo.completeDate);
    // }
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
