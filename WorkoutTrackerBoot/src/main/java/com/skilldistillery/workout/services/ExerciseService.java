package com.skilldistillery.workout.services;

import java.util.List;

import com.skilldistillery.workout.entities.Exercise;

public interface ExerciseService {
	
	List<Exercise> allExercises();
	Exercise getExercise(int id);
	Exercise createExercise(Exercise exercise);
	Exercise updateExercise(int id, Exercise exercise);
	boolean deleteExerciseById(int id);

}
