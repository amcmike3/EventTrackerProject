package com.skilldistillery.workout.entities;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;

@Entity
public class Workout {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;

	private LocalDateTime date;

	private Integer mood;

	private String notes;

	private boolean enabled;

	@OneToMany(mappedBy = "workout")
	private List<Exercise> exercises;

	public Workout() {
		date = LocalDateTime.now();
		enabled = true;

	}

	public List<Exercise> getExercises() {
		return exercises;
	}

	public void setExercises(List<Exercise> exercises) {
		this.exercises = exercises;
	}

	public void addExercise(Exercise exercise) {
		if (exercises == null) {
			exercises = new ArrayList<>();
		}
		if (!exercises.contains(exercise)) {
			exercises.add(exercise);
			exercise.getWorkout().removeExercise(exercise);
		}
		exercise.setWorkout(this);
	}

	public void removeExercise(Exercise exercise) {
		if (exercises != null && exercises.contains(exercise)) {
			exercises.remove(exercise);
			exercise.setWorkout(null);
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

	public boolean isEnabled() {
		return enabled;
	}

	public void setEnabled(boolean enabled) {
		this.enabled = enabled;
	}
}
