import { Workout } from './../../models/workout';
import { WorkoutService } from './../../services/workout.service';
import { Component, OnInit } from '@angular/core';
import { getCurrencySymbol } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  workouts: Workout[] = [];
  newWorkout : Workout = new Workout();
  editWorkout : Workout | null = null;
  selected : null | Workout = null;
  constructor(private workoutService: WorkoutService) {}

  ngOnInit() {
    this.reload();
  }

  reload() {
    this.workoutService.index().subscribe({
      next: (data) => {
        this.workouts = data;
        console.log(data);
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

  }

  deleteWorkout(workoutId : number){

  }


  addWorkout(newWorkout : Workout){
    this.workoutService.create(newWorkout).subscribe({
      next : (data) => {
        this.newWorkout = new Workout();
        this.reload();
      },
      error: (err) => {
        console.log(
          'TodoListCompenent.addTodo(): Error creating todo'
        );
        console.log(err);
      }
    })

  }

  updateWorkout(editWorkout : Workout){

  }

  daysSinceWorkout() : number{
 // fix me return number of days since last workout
    return 0;
  }

  daysSinceWorkoutClass() : string {
    let numDays = this.daysSinceWorkout();
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
  setEditWorkout(){
    this.editWorkout = Object.assign({}, this.selected);
  }
}
