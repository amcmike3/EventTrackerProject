package com.skilldistillery.workout.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.skilldistillery.workout.entities.Exercise;
import com.skilldistillery.workout.repositories.ExerciseRepository;

@Service
public class ExerciseServiceImpl implements ExerciseService {
	
	@Autowired
	private ExerciseRepository exRepo;

	@Override
	public List<Exercise> allExercises() {
		return exRepo.findAll();
	}

	@Override
	public Exercise getExercise(int id) {
		Optional<Exercise> opt = exRepo.findById(id);
		Exercise ex = null;
		if (opt.isPresent()) {
			ex = opt.get();		
			}
		return ex;
	}

	@Override
	public Exercise createExercise(Exercise exercise) {
		Exercise ans = null;
		if (exercise != null) {
			ans = exRepo.saveAndFlush(exercise);
		}
		return ans;
	}

	@Override
	public Exercise updateExercise(int id, Exercise exercise) {
		Exercise ans = null;
		Optional<Exercise> opt = exRepo.findById(id);
		if(opt.isPresent()) {
			ans = opt.get();
			if(exercise.getDescription() != null && !exercise.getDescription().equals("")) {
				ans.setDescription(exercise.getDescription());
			}
			if(exercise.getWeight() != null) {
				ans.setWeight(exercise.getWeight());
			}
			if(exercise.getName() != null && !exercise.getName().equals("")) {
				ans.setName(exercise.getName());
			}
			exRepo.saveAndFlush(ans);
		}
		return ans;
	}

	@Override
	public boolean deleteExerciseById(int id) {
		exRepo.deleteById(id);
		return exRepo.findById(id).isPresent();
	}

}
