package com.skilldistillery.workout.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.skilldistillery.workout.entities.Workout;
import com.skilldistillery.workout.repositories.WorkoutRepository;

@Service
public class WorkoutServiceImpl implements WorkoutService {
	
	@Autowired
	WorkoutRepository workoutRepo;

	@Override
	public List<Workout> allWorkouts() {
		return workoutRepo.findAll();
	}

	@Override
	public Workout getWorkout(int id) {
		Optional<Workout> workOpt = workoutRepo.findById(id);
		Workout workout = null;
		if (workOpt.isPresent()) {
			workout = workOpt.get();
		}
		
		return workout;
	}

	@Override
	public Workout createWorkout(Workout workout) {
		return null;
	}

	@Override
	public Workout updateWorkout(int id, Workout workout) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public boolean deleteWorkoutById(int id) {
		// TODO Auto-generated method stub
		return false;
	}

}
