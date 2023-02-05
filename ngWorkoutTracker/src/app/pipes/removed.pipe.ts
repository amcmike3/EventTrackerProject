import { Pipe, PipeTransform } from '@angular/core';
import { Workout } from '../models/workout';

@Pipe({
  name: 'removed'
})
export class RemovedPipe implements PipeTransform {

  transform(workouts: Workout[]): Workout[] {
    let ans : Workout[] = [];
    for (let workout of workouts){
      if (workout.enabled){
        ans.push(workout);
      }
    }
    return ans;
  }

}
