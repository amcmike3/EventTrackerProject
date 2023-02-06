import { WorkoutService } from '../../services/workout.service';
import { HttpClient } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { interval } from 'rxjs';
import { Subscription } from 'rxjs/internal/Subscription';
import { Workout } from 'src/app/models/workout';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent {

  private subscription: Subscription;

  public dateNow = new Date();
  @Input() lastWorkoutInput = "";
  lastWorkout = new Date(this.lastWorkoutInput);
  milliSecondsInASecond = 1000;
  hoursInADay = 24;
  minutesInAnHour = 60;
  SecondsInAMinute  = 60;
  public timeDifference : number;
  public secondsToDday : number;
  public minutesToDday : number;
  public hoursToDday : number;
  public daysToDday : number;

  constructor(){
    this.subscription = new Subscription();
    this.timeDifference = 0;
    this.secondsToDday = 0;
    this.minutesToDday = 0;
    this.hoursToDday = 0;
    this.daysToDday = 0;
  }

  private getTimeDifference () {
      this.timeDifference = this.lastWorkout.getTime() - new Date().getTime();
      this.allocateTimeUnits(this.timeDifference);
  }

private allocateTimeUnits (timeDifference : number) {
      this.secondsToDday = -Math.floor((timeDifference) / (this.milliSecondsInASecond) % this.SecondsInAMinute) + 60; // -1 on local
      this.minutesToDday = -Math.floor((timeDifference) / (this.milliSecondsInASecond * this.minutesInAnHour) % this.SecondsInAMinute) + 59; // -1 on local
      this.hoursToDday = -Math.floor((timeDifference) / (this.milliSecondsInASecond * this.minutesInAnHour * this.SecondsInAMinute) % this.hoursInADay) + 6; // -1 on local
      this.daysToDday = -Math.floor((timeDifference) / (this.milliSecondsInASecond * this.minutesInAnHour * this.SecondsInAMinute * this.hoursInADay)) ; // -1 on local
}

  ngOnInit() {
     this.subscription = interval(1000)
         .subscribe(x => { this.getTimeDifference(); });
  }

 ngOnDestroy() {
    this.subscription.unsubscribe();
 }

 ngOnChanges(){
  this.lastWorkout = new Date(this.lastWorkoutInput);
 }
}
