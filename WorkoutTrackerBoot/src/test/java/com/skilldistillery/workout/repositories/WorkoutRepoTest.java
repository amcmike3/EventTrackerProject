package com.skilldistillery.workout.repositories;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertTrue;

import java.util.Optional;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.skilldistillery.workout.entities.Workout;

@SpringBootTest
class WorkoutRepoTest {
	
	@Autowired
	private WorkoutRepository workRepo;

	@Test
	void test() {
		Optional<Workout> workout = workRepo.findById(1);
		assertTrue(workout.isPresent());
		assertEquals(1, workout.get().getDate().getDayOfMonth());
	}

}
