package com.skilldistillery.workout.controllers;

import java.util.List;

import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.skilldistillery.workout.entities.Exercise;
import com.skilldistillery.workout.entities.Workout;
import com.skilldistillery.workout.services.ExerciseService;
import com.skilldistillery.workout.services.WorkoutService;

@RestController
@RequestMapping("api")
public class ExerciseController {
	
	@Autowired
	private ExerciseService exServ;
	
	@Autowired WorkoutService workServ;
	
	@GetMapping("exercises")
	public List<Exercise> allExercises(){
		return exServ.allExercises();
	}
	
	@GetMapping("exercises/{id}")
	public Exercise getExercise(@PathVariable Integer id, HttpServletResponse resp) {
		Exercise ans = exServ.getExercise(id);
		if (ans == null) {
			resp.setStatus(404);
		}
		return ans;
	}
	
	@PostMapping("workouts/{id}/exercises")
	public Exercise createExercise(@RequestBody Exercise exercise, @PathVariable Integer id, HttpServletResponse resp) {
		Exercise ans = null;
		if (exercise.getName() != null) {
			ans = exServ.createExercise(exercise, id);
			resp.setStatus(201);
		} else {
			resp.setStatus(400);
		}
		return ans;
	}
	
	@PutMapping("exercises/{id}")
	public Exercise updateExercises(@PathVariable Integer id, @RequestBody Exercise exercise, HttpServletResponse resp) {
		Exercise ans = null;
		try {
			ans = exServ.updateExercise(id, exercise);
			if (ans == null) {
				resp.setStatus(404);
			}
		} catch (Exception e) {
			e.printStackTrace();
			resp.setStatus(400);
		}
		return ans;
	}
	
//	@DeleteMapping("exercises/{id}")
//	delete exercise is not allowed.
	

}
