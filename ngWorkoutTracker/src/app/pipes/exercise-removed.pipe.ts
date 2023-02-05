import { Exercise } from './../models/exercise';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'exerciseRemoved'
})
export class ExerciseRemovedPipe implements PipeTransform {

  transform(exercises: Exercise[]): Exercise[] {
    let ans : Exercise[] = []
    for (let exercise of exercises){
      if (exercise.enabeled){
        ans.push(exercise)
      }
    }
    return ans;
  }

}
