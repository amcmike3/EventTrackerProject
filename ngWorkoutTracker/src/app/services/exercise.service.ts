import { Exercise } from './../models/exercise';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ExerciseService {

  url = environment.baseUrl + "api/exercises";
  constructor(private http: HttpClient) { }


  create(exercise: Exercise, workoutId : number): Observable<Exercise> {
    return this.http.post<Exercise>(environment.baseUrl + `api/workouts/${workoutId}/exercises`, exercise ).pipe(
      catchError((err: any) => {
        console.log(err);
        return throwError(
          () =>
            new Error('ExerciseService.create(): error creating Exercise: ' + err)
        );
      })
    );
  }

  update(exercise: Exercise): Observable<Exercise> {
    return this.http.put<Exercise>(`${this.url}/${exercise.id}`, exercise ).pipe(
      catchError((err: any) => {
        console.log(err);
        return throwError(
          () =>
            new Error('ExerciseService.update(): error updating exercise: ' + err)
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
                'ExerciseService.destroy(): error deleting exercise: ' + err
              )
          );
        })
      );
  }
}
