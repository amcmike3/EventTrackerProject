import { Exercise } from './exercise';
export class Workout {
  id : number;
  date : string;
  mood : string;
  notes :string;
  enabled : boolean;
  exercises : Exercise[] | null;
  constructor(id : number = 0, date : string = "", mood : string= "", notes :string= "",enabled : boolean = true ,exercises : Exercise[] | null = null){
    this.id = id;
    this.date = date;
    this.mood = mood;
    this.notes = notes;
    this.enabled = enabled;
    this.exercises = exercises;
  }
}
