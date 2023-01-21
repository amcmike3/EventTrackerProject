package com.skilldistillery.workout.entities;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;

@Entity
public class Workout {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;

	private LocalDateTime date;
	
	private Integer mood;
	
	private String notes;
	
	@ManyToMany
	@JoinTable(name = "workouts_have_exercises", 
	joinColumns = @JoinColumn(name = "exercises_id"), 
	inverseJoinColumns = @JoinColumn(name = "workouts_id"))
	private List<Exercise> exercises;

	public Workout() {
		mood = -1;
		date = LocalDateTime.now();
		
	}

	public List<Exercise> getExercises() {
		return exercises;
	}

	public void setExercises(List<Exercise> exercises) {
		this.exercises = exercises;
	}

	public void addExercise(Exercise exercise) {
		if(exercises == null) {
			exercises = new ArrayList<>();
		}
		if (! exercises.contains(exercise)) {
			exercises.add(exercise);
			exercise.addWorkout(this);
		}
	}
	
	public void removeExercise(Exercise exercise) {
		if (exercises != null && exercises.contains(exercise)) {
			exercises.remove(exercise);
			exercise.removeWorkout(this);
		}
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	@Override
	public String toString() {
		return "Workout [id=" + id + ", date=" + date + "]";
	}

	@Override
	public int hashCode() {
		return Objects.hash(id);
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Workout other = (Workout) obj;
		return id == other.id;
	}

	public LocalDateTime getDate() {
		return date;
	}

	public void setDate(LocalDateTime date) {
		this.date = date;
	}

	public Integer getMood() {
		return mood;
	}

	public void setMood(Integer mood) {
		this.mood = mood;
	}

	public String getNotes() {
		return notes;
	}

	public void setNotes(String notes) {
		this.notes = notes;
	}
}
