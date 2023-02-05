import { WorkoutService } from './../../services/workout.service';
import { ExerciseService } from './../../services/exercise.service';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Exercise } from 'src/app/models/exercise';
import { Workout } from 'src/app/models/workout';

@Component({
  selector: 'app-exercise',
  templateUrl: './exercise.component.html',
  styleUrls: ['./exercise.component.css']
})
export class ExerciseComponent {

  @Input() selected : Workout | null = null;
  @Output() selectedChange = new EventEmitter<Workout | null>();
  @Input() editExercise : Exercise | null = null;
  @Input() newExerciseForm = false;
  @Input() newExercise = new Exercise();


  constructor(private exerciseService : ExerciseService, private workoutService : WorkoutService){

  }

  setEditExercise(exercise : Exercise){
    this.editExercise = exercise;
  }

  removeEditExercise(){
    this.editExercise = null;
  }
  updateExercise(exercise : Exercise){
    this.exerciseService.update(exercise).subscribe({
      next: (data) => {
        this.editExercise = null;
      },
      error: (err) =>{
        console.log(
          'HomeCompenent.updateTodo(): Error updating todo'
        );
      }
    })
  }
  exerciseExists() : boolean{
    let ans = false;
    if (this.selected?.exercises != undefined && this.selected?.exercises[0]){
      ans = true;
    }
    return ans;
  }

  createExercise(exercise: Exercise, workoutId : number){
    this.exerciseService.create(exercise, workoutId).subscribe({
      next : (data) => {
        this.newExerciseForm = false;
        this.newExercise = new Exercise();
        this.refreshExercises(workoutId);
      },
      error: (err) => {
        console.log(
          'HomeCompenent.createExercise(): Error creating Exercise'
        );
        console.log(err);
      }
    });

  }

  deleteExercise(id : number, selected: Workout) {
    this.exerciseService.destroy(id).subscribe({
      next: (data) => {
        this.refreshExercises(selected.id);
      },
      error: (err) => {
        console.log(
          'HomeCompenent.deleteExercise(): Error deleting Exercise'
        );
        console.log(err);
      }
    });
  }

  refreshExercises(workoutId : number){
    this.workoutService.show(workoutId).subscribe({
      next: (data) => {
        this.refreshSelected(data);
      },
      error: (err) => {
        console.log(
          'HomeCompenent.refreshExercise(): Error refreshing Exercise'
        );
        console.log(err);
      }
    })
  }
  refreshSelected(data : Workout){
    this.selectedChange.emit(this.selected = data);
  }
  ngOnDestroy(){
    this.editExercise = null;
    this.newExerciseForm = false;
  }
}
