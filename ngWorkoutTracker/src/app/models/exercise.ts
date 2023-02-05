export class Exercise {
  name: string;
  description: string;
  weight : number;
  reps : number;
  sets : number;

  constructor(name : string = "", description : string = "", weight : number = 0, reps : number = 0, sets : number = 0){
      this.name = name;
      this.description = description;
      this.weight  =  weight;
      this.reps  = reps;
      this.sets = sets;
    }
}
