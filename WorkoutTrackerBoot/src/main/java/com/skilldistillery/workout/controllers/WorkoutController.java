package com.skilldistillery.workout.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.skilldistillery.workout.services.WorkoutService;

@RestController
@RequestMapping("api")
public class WorkoutController {
	
	@Autowired
	private WorkoutService workServ;

}
