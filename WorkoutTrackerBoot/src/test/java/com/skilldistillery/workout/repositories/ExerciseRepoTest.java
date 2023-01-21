package com.skilldistillery.workout.repositories;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertTrue;

import java.util.Optional;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.skilldistillery.workout.entities.Exercise;

@SpringBootTest
class ExerciseRepoTest {
	
	@Autowired
	private ExerciseRepository exRepo;

	@Test
	void test() {
		Optional<Exercise> exercise = exRepo.findById(1);
		assertTrue(exercise.isPresent());
		assertEquals("bench press", exercise.get().getName());
	}

}
