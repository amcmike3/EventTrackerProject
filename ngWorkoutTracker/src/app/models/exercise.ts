export class Exercise {
  id: number;
  name: string;
  description: string;
  weight: number;
  reps: number;
  sets: number;
  enabled: boolean;

  constructor(
    id: number = 0,
    name: string = '',
    description: string = '',
    weight: number = 0,
    reps: number = 0,
    sets: number = 0,
    enabled: boolean = true
  ) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.weight = weight;
    this.reps = reps;
    this.sets = sets;
    this.enabled = enabled;
  }
}
