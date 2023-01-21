package com.skilldistillery.workout.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.skilldistillery.workout.services.ExerciseService;

@RestController
@RequestMapping("api")
public class ExerciseController {
	
	@Autowired
	private ExerciseService ExServ;

}
