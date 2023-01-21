package com.skilldistillery.workout.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.skilldistillery.workout.entities.Exercise;
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
			workoutRepo.saveAndFlush(ans);
		}
		return ans;
	}

	@Override
	public boolean deleteWorkoutById(int id) {
		workoutRepo.deleteById(id);
		return workoutRepo.findById(id).isPresent();
	}

}
