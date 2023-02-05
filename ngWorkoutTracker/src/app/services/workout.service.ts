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

  show(workoutId: number): Observable<Workout> {
    return this.http
      .get<Workout>(`${this.url}/${workoutId}`)
      .pipe(
        catchError((err: any) => {
          console.log(err);
          return throwError(
            () =>
              new Error(
                'TodoService.show(): error retrieving Todo id#: ' +
                  workoutId +
                  ', ' +
                  err
              )
          );
        })
      );
  }

  create(workout: Workout): Observable<Workout> {
    return this.http.post<Workout>(this.url, workout ).pipe(
      catchError((err: any) => {
        console.log(err);
        return throwError(
          () =>
            new Error('TodoService.index(): error creating Todo item: ' + err)
        );
      })
    );
  }

  update(workout: Workout): Observable<Workout> {
    return this.http.put<Workout>(`${this.url}/${workout.id}`, workout ).pipe(
      catchError((err: any) => {
        console.log(err);
        return throwError(
          () =>
            new Error('TodoService.update(): error updating workout item: ' + err)
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
                'TodoService.update(): error updating workout item: ' + err
              )
          );
        })
      );
  }

}
