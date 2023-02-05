import { ExerciseService } from './../../services/exercise.service';
import { Exercise } from './../../models/exercise';
import { RemovedPipe } from './../../pipes/removed.pipe';
import { Workout } from './../../models/workout';
import { WorkoutService } from './../../services/workout.service';
import { Component, OnInit } from '@angular/core';
import { getCurrencySymbol } from '@angular/common';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  workouts: Workout[] = [];
  newWorkout : Workout = new Workout();
  selected : null | Workout = null;
  editWorkout : Workout | null = null;
  newWorkoutForm = false;
  daysSinceLastWorkout = this.daysSinceWorkout();
  lastWorkout = "";



  constructor(private workoutService: WorkoutService, private removedPipe : RemovedPipe, private exerciseService : ExerciseService) {}

  ngOnInit() {
    this.reload();
  }

  reload() {
    this.workoutService.index().subscribe({
      next: (data) => {
        this.workouts = this.removedPipe.transform(data);
        this.lastWorkout = this.workouts[0].date
      },
      error: (err) => {
        console.log(
          'error in home.component.reload() could not get list of workouts'
        );
        console.log(err);
      },
    });
  }

  displayWorkout(workout : Workout){
    this.selected = workout;
  }

  deleteWorkout(workoutId : number){
    this.workoutService.destroy(workoutId).subscribe({
      next: (data) => {
        this.reload();
      },
      error: (err) => {
        console.log(
          'HomeCompenent.deleteWorkout(): Error deleting Workout'
        );
        console.log(err);
      }
    })
  }


  addWorkout(newWorkout : Workout){
    this.workoutService.create(newWorkout).subscribe({
      next : (data) => {
        this.selected = data;
        this.newWorkout = new Workout();
        this.reload();
      },
      error: (err) => {
        console.log(
          'HomeCompenent.addWorkout(): Error creating Workout'
        );
        console.log(err);
      }
    })

  }

  updateWorkout(editWorkout : Workout){
    this.workoutService.update(editWorkout).subscribe({
      next: (data) => {
        this.reload();
        this.selected = this.editWorkout;
        this.editWorkout = null;
      },
      error: (err) =>{
        console.log(
          'TodoListCompenent.updateTodo(): Error updating todo'
        );
      }
    });
  }

  daysSinceWorkout(){
 // fix me return number of days since last workout
 let ans = 0
    if (this.workouts[this.workouts.length - 1] != undefined){
      let lastWorkout = Date.parse(this.workouts[this.workouts.length - 1].date).valueOf();
      let currDate = new Date().valueOf();
      ans = Math.floor((currDate - lastWorkout) / (1000 * 3600 * 24));
      if (ans < 0){
        ans = 0;
      }
    }
    return ans;
  }

  daysSinceWorkoutClass() : string {
    let numDays = this.daysSinceLastWorkout;
    if (numDays > 5){
      return "red";
    } else if (numDays > 2){
      return "yellow";
    }
    return "green";
  }
  removeWorkout(){
    this.selected = null;
  }
  removeEditWorkout(){
    this.editWorkout = null;
  }
  setEditWorkout(){
    this.editWorkout = Object.assign({}, this.selected);
  }
  clearNewWorkoutForm(){
    this.newWorkoutForm = false;
    this.newWorkout = new Workout();
  }

}
