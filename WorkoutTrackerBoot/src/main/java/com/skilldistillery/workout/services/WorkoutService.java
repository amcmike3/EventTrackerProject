package com.skilldistillery.workout.services;

import java.util.List;

import com.skilldistillery.workout.entities.Workout;

public interface WorkoutService {

	List<Workout> allWorkouts();
	Workout getWorkout(int id);
	Workout createWorkout(Workout workout);
	Workout updateWorkout(int id, Workout workout);
	boolean deleteWorkoutById(int id);
}
