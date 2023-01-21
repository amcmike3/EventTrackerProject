package com.skilldistillery.workout.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.skilldistillery.workout.entities.Exercise;
import com.skilldistillery.workout.services.ExerciseService;

@RestController
@RequestMapping("api")
public class ExerciseController {
	
	@Autowired
	private ExerciseService exServ;
	
	@GetMapping("exercises")
	public List<Exercise> allExercises(){
		return exServ.allExercises();
	}
	
	@GetMapping("exercises/{id}")
	public Exercise getExercise(@PathVariable Integer id) {
		return exServ.getExercise(id);
	}

}
