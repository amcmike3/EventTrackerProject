package com.skilldistillery.workout.controllers;

import java.util.List;

import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.skilldistillery.workout.entities.Workout;
import com.skilldistillery.workout.services.WorkoutService;

@RestController
@CrossOrigin({ "*", "http://localhost/" })
@RequestMapping("api")
public class WorkoutController {

	@Autowired
	private WorkoutService workServ;

	@GetMapping("workouts")
	public List<Workout> allWorkouts() {
		List<Workout> workouts = workServ.allWorkouts();
		for (Workout workout : workouts) {
			workout.getExercises().size();
		}
		return workouts;
	}

	@GetMapping("workouts/{id}")
	public Workout getWorkout(@PathVariable Integer id, HttpServletResponse resp) {
		Workout ans = workServ.getWorkout(id);
		if (ans == null) {
			resp.setStatus(404);
		}
		
		return ans;
	}

	@PostMapping("workouts")
	public Workout createWorkout(@RequestBody Workout workout, HttpServletResponse resp) {
		Workout ans = null;
		// hibernate gets cannot update child error if Exercise objects are also sent in.
		try {
				ans = workServ.createWorkout(workout);
				resp.setStatus(201);
		} catch (Exception e) {
			e.printStackTrace();
			resp.setStatus(400);
		}
		return ans;
	}
	
	@PutMapping("workouts/{id}")
	public Workout updateWorkout(@PathVariable Integer id, @RequestBody Workout workout, HttpServletResponse resp) {
		Workout ans = null;
		try {
			ans = workServ.updateWorkout(id, workout);
			if (ans == null) {
				resp.setStatus(404);
			}
		} catch (Exception e) {
			e.printStackTrace();
		resp.setStatus(400);
		}
		return ans;
	}
	
	@DeleteMapping("workouts/{id}")
	public void deleteWorkout(@PathVariable Integer id, HttpServletResponse resp) {
		//toggle enabled column in database to false
		// enabled vs disabled will be handles on front end
		try {
			if(workServ.deleteWorkoutById(id)) {
				resp.setStatus(204);
			} else {
				resp.setStatus(400);
			}
		} catch (Exception e) {
			e.printStackTrace();
			resp.setStatus(400);
		}
	}

}
