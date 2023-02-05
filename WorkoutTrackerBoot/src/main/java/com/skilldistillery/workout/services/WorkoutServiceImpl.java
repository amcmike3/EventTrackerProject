package com.skilldistillery.workout.services;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.skilldistillery.workout.entities.Exercise;
import com.skilldistillery.workout.entities.Workout;
import com.skilldistillery.workout.repositories.ExerciseRepository;
import com.skilldistillery.workout.repositories.WorkoutRepository;

@Service
public class WorkoutServiceImpl implements WorkoutService {
	
	@Autowired
	WorkoutRepository workoutRepo;
	
	@Autowired
	private ExerciseRepository exRepo;

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
		workout.setDate(LocalDateTime.now());
		return workoutRepo.save(workout);
	}

	@Override
	public Workout updateWorkout(int id, Workout workout) {
		Workout ans = null;
		Optional<Workout> opt = workoutRepo.findById(id);
		if(opt.isPresent()) {
			ans = opt.get();
			if(workout.getMood() != 0) {
				ans.setMood(workout.getMood());
			}
			if(workout.getNotes() != null && workout.getNotes() != "") {
				ans.setNotes(workout.getNotes());
			}
			ans = workoutRepo.saveAndFlush(ans);
		}
		return ans;
	}

	@Override
	public boolean deleteWorkoutById(int id) {
		boolean ans = false;
		Optional<Workout> opt = workoutRepo.findById(id);
		if(opt.isPresent()) {
			Workout workout = opt.get();
			workout.setEnabled(false);
			workoutRepo.saveAndFlush(workout);
			ans = !workout.isEnabled();
			
		} 
		
		return ans;
	}

}
