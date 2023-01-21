package com.skilldistillery.workout.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.skilldistillery.workout.entities.Exercise;

public interface ExerciseRepository extends JpaRepository<Exercise, Integer> {

}
