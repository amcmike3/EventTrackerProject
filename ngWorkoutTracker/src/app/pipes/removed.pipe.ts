import { Pipe, PipeTransform } from '@angular/core';
import { Workout } from '../models/workout';

@Pipe({
  name: 'removed'
})
export class RemovedPipe implements PipeTransform {

  transform(workouts: Workout[]): Workout[] {
    let ans : Workout[] = [];
    for (let i = workouts.length - 1; i >= 0; i--){
      let workout = workouts[i];
      if (workout.enabled){
        ans.push(workout);
      }
    }
    return ans;
  }

}
