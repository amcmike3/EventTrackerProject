
window.addEventListener('load', (e) => {
	init();
})


function init() {
	loadWorkouts();
	let createWorkoutBtn = document.getElementsByName('createWorkoutBtn')[0];
	createWorkoutBtn.addEventListener('click', createWorkout);
}


function loadWorkouts() {
	let xhr = new XMLHttpRequest();

	xhr.open('GET', "api/workouts")

	xhr.onreadystatechange = function() {
		if (xhr.readyState === 4) {
			if (xhr.status === 200) {
				window.workouts = JSON.parse(xhr.responseText);
				setInterval(slidingBackgounds, 10000);
				workoutHeaders();
				displayWorkouts(JSON.parse(xhr.responseText));
			} else {
				//TODO display an error
			}
		}
	}

	xhr.send();
}

function displayWorkouts(workoutList) {

	let contentDiv = document.getElementById('content');
	contentDiv.textContent = "";
	let label = document.createElement('label');
	label.style.fontSize = "50px"
	label.textContent = "Workouts";
	label.className = "workoutHeader";
	contentDiv.appendChild(label);
	label.for = "contentTable";
	let table = document.createElement('table');
	table.name = "contentTable"
	table.style.border = "solid";
	table.className = "workoutHeader";
	let head = document.createElement('thead');

	table.appendChild(head);
	head = document.createElement('thead');
	let id = document.createElement('th');
	let notes = document.createElement('th');
	let date = document.createElement('th');
	id.textContent = "Id";
	date.textContent = "Date"
	notes.textContent = "Notes";
	head.appendChild(id);
	head.appendChild(date);
	head.appendChild(notes);
	table.appendChild(head);



	let body = document.createElement('tbody');
	for (let workout of workoutList) {
		if (workout.enabled) {

			let tr = document.createElement('tr');
			id = document.createElement('td');
			date = document.createElement('td');
			notes = document.createElement('td');
			date.style.borderLeft = "solid"
			date.style.borderRight = "solid";

			id.textContent = workout.id;
			date.textContent = workout.date.substring(0, 10);
			notes.textContent = workout.notes;
			tr.appendChild(id);
			tr.appendChild(date);
			tr.appendChild(notes);
			let button = document.createElement('input');
			button.type = 'submit';
			button.value = 'details';
			button.addEventListener('click', displayDetails);
			tr.appendChild(button);


			body.appendChild(tr);

		}
	}
	table.appendChild(body);
	contentDiv.appendChild(table);
}

function displayDetails(e) {
	e.preventDefault();
	removeExercises();
	let sibling = e.target.previousElementSibling
	let content = document.createElement('div');
	let workoutId = +e.target.previousElementSibling.previousElementSibling.previousElementSibling.textContent;
	let exercises = window.workouts[workoutId - 1].exercises;
	let mood = document.createElement('p');
	mood.textContent = "Mood: " + window.workouts[workoutId - 1].mood;
	content.appendChild(mood);
	for (let ex of exercises) {
		let para = document.createElement('p');
		para.textContent = ex.name + " Reps: " + ex.reps + " Sets: " + ex.sets + " Weight: " + ex.weight;
		content.appendChild(para);
	}
	let updateBtn = document.createElement('input');
	updateBtn.type = "submit";
	updateBtn.value = "update";
	updateBtn.addEventListener('click', updateWorkoutForm);
	let deleteBtn = document.createElement('input');
	deleteBtn.type = "submit";
	deleteBtn.value = "delete";
	deleteBtn.addEventListener('click', deleteWorkout);
	let addExerciseBtn = document.createElement('input');
	addExerciseBtn.type = "submit";
	addExerciseBtn.value = "Add Exercise";
	addExerciseBtn.addEventListener('click', addExercise);
	content.appendChild(updateBtn);
	content.appendChild(deleteBtn);
	content.appendChild(addExerciseBtn);
	content.style.border = "solid";
	window.exercise = content;
	sibling.appendChild(content);

}

function removeExercises(e) {
	if (window.exercise != undefined) {
		window.exercise.parentElement.removeChild(window.exercise);
	}
}

function createWorkout(e) {
	e.preventDefault();
	let form = e.target.parentElement;
	workout = {
		notes: form.notes.value,
		mood: +form.mood.value
	};

	let xhr = new XMLHttpRequest();
	xhr.open('POST', "api/workouts");
	xhr.onreadystatechange = function() {
		if (xhr.readyState === 4) {
			if (xhr.status === 201) {
				form.reset();
				let contentDiv = document.getElementById('content');
				contentDiv.textContent = '';
				loadWorkouts();
			} else {
				let fail = document.createElement('div');
				fail.textContent = "Failed to create workout event";
				fail.style.color = "red";
				form.parentElement.insertBefore(fail, form);
			}
		}
	};
	xhr.setRequestHeader("Content-type", "application/json");
	xhr.send(JSON.stringify(workout));

}

let updateWorkoutForm = function(e) {
	e.preventDefault();
	let workoutId = +e.target.parentElement.parentElement.previousElementSibling.previousElementSibling.textContent;
	let workout = window.workouts[workoutId - 1];
	let div = e.target.parentElement;
	div.textContent = "";
	let form = document.createElement('form');
	let mood = document.createElement('input');
	let notes = document.createElement('textarea');
	notes.rows = "10";
	notes.cols = "10";
	notes.textContent = workout.notes;
	mood.value = workout.mood;
	
	let updateBtn = document.createElement('input');
	updateBtn.type = "submit";
	updateBtn.value = "update";
	updateBtn.addEventListener('click', updateWorkoutFormButton);
	form.appendChild(mood);
	form.appendChild(document.createElement('br'));
	form.appendChild(notes);
	form.appendChild(document.createElement('br'));
	form.appendChild(updateBtn);
	div.appendChild(form);
	

}
function updateWorkoutFormButton(e){
	e.preventDefault();
	let workoutId = +e.target.parentElement.parentElement.parentElement.previousElementSibling.previousElementSibling.textContent;
	let workout = window.workouts[workoutId - 1];
	workout.notes = e.target.previousElementSibling.previousElementSibling.value;
	workout.mood = e.target.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.value;
	updateWorkout(workout, workoutId);
}

function updateWorkout(workout, workoutId) {
	let xhr = new XMLHttpRequest();
	xhr.open("PUT", "api/workouts/" + workoutId);
	
	xhr.onreadystatechange = function (){
		if (xhr.readyState === 4) {
			if (xhr.status === 200) {
				let contentDiv = document.getElementById('content');
				contentDiv.textContent = '';
				loadWorkouts();
			} else {
				let fail = document.createElement('div');
				fail.name = "fail";
				fail.textContent = "Failed to update workout";
				fail.style.color = "red";
				let table = document.getElementById('content');
				table.appendChild(fail);
			}
		}
	}
	xhr.setRequestHeader("Content-type", "application/json");
	xhr.send(JSON.stringify(workout));
}

let deleteWorkout = function(e) {
	e.preventDefault();
	let workoutId = +e.target.parentElement.parentElement.previousElementSibling.previousElementSibling.textContent;
	
	let xhr = new XMLHttpRequest();
	xhr.open("DELETE", "api/workouts/" + workoutId);
	
	xhr.onreadystatechange = function (){
		if (xhr.readyState === 4) {
			if (xhr.status === 204) {
				let contentDiv = document.getElementById('content');
				contentDiv.textContent = '';
				loadWorkouts();
			} else {
				let fail = document.createElement('div');
				fail.textContent = "Failed to delete workout";
				fail.style.color = "red";
				let table = document.getElementById('content');
				table.appendChild(fail);
			}
		}
	}
	
	xhr.send();
	
}



let workoutHeaders = function (){
	let content = document.getElementById('contentHeader');
	if (content.textContent !== ''){
		content.textContent = '';
	}
	let h2 = document.createElement('h2');
	h2.textContent = daysSinceLastWorkout() + " days since last workout";
	h2.className = "workoutHeader";
	count = 0;
	for (let i = window.workouts.length - 1; i > 0; i-- ){
		if (window.workouts[i].enabled){
			count++;
		}
	}
	let h2_2 = document.createElement('h2');
	h2_2.textContent = ++count + " workouts logged ";
	h2_2.className = "workoutHeader";
	
	content.appendChild(h2);
	content.appendChild(h2_2);
}

let daysSinceLastWorkout = function (){
	let lastWorkout;
	let today = new Date();
	for (let i = window.workouts.length - 1; i > 0; i-- ){
		if (window.workouts[i].enabled){
			lastWorkout = new Date(window.workouts[i].date);
			break;
		}
	}
	
	timeDifference = today.getTime() - lastWorkout.getTime();
	
	return Math.floor(timeDifference / (1000 * 3600 * 24));
	
}

function addExercise(e){
	e.preventDefault();
 	let parent = e.target.parentElement;
	parent.textContent = "";
 	parent.appendChild(document.createElement('br'));
	let form = document.createElement('form');
	let name = document.createElement('input');
	let reps = document.createElement('input');
	let sets = document.createElement('input');
	let weight = document.createElement('input');
	name.type = "text"
	name.placeholder = "exercise name";
	name.name = "name";
	reps.name = "reps";
	sets.name = "sets";
	weight.name = "weight";
	reps.type = "number";
	sets.type = "number";
	weight.type = "number";
	let repsLbl = document.createElement('label');
	repsLbl.for = "reps"
	repsLbl.textContent = "reps"
	let setsLbl = document.createElement('label');
	setsLbl.for = "sets"
	setsLbl.textContent = "sets"
	let weightLbl = document.createElement('label');
	weightLbl.for = "weight"
	weightLbl.textContent = "weight"
	let updateBtn = document.createElement('input');
	updateBtn.type = "submit";
	updateBtn.value = "create";
	let description = document.createElement('textarea');
	description.rows = "10";
	description.cols = "15";
	description.textContent = "description: ";
	updateBtn.addEventListener('click', createExercise);
	let addExercise = document.createElement('label');
	addExercise.textContent = "Add Exercise";
	addExercise.for = "name";
	form.appendChild(addExercise);
	form.appendChild(document.createElement('br'));
	form.appendChild(document.createElement('br'));
	form.appendChild(name);
	form.appendChild(document.createElement('br'));
	form.appendChild(repsLbl);
	form.appendChild(document.createElement('br'));
	form.appendChild(reps);
	form.appendChild(document.createElement('br'));
	form.appendChild(setsLbl);
	form.appendChild(document.createElement('br'));
	form.appendChild(sets);
	form.appendChild(document.createElement('br'));
	form.appendChild(weightLbl);
	form.appendChild(document.createElement('br'));
	form.appendChild(weight);
	form.appendChild(document.createElement('br'));
	form.appendChild(description);
	form.appendChild(document.createElement('br'));
	form.appendChild(updateBtn);
	parent.appendChild(form);
	
	
}

function createExercise(e){
	e.preventDefault();
	let workoutId = +e.target.parentElement.parentElement.parentElement.previousElementSibling.previousElementSibling.textContent;
 	let workout = {
		 name: e.target.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.value,
		 reps: +e.target.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.value,
		 sets: +e.target.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.value,
		 weight: +e.target.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.value,
		 description: e.target.previousElementSibling.previousElementSibling.value
	 }
 	let xhr = new XMLHttpRequest();
 	xhr.open('POST', 'api/workouts/' + workoutId + '/exercises');
 	xhr.onreadystatechange = function () {
		 if (xhr.readyState === 4){
			 if (xhr.status === 201){
				 loadWorkouts();
			 } else {
				 let fail = document.createElement('div');
				fail.textContent = "Failed to create Exercise";
				fail.style.color = "red";
				 e.target.parentElement.appendChild(fail);
			 }
		 }
	 }
	 xhr.setRequestHeader("Content-type", "application/json");
 	xhr.send(JSON.stringify(workout));
}

var current = 0;
let backgrounds = [
	'url(https://img.freepik.com/free-photo/exercise-weights-iron-dumbbell-with-extra-plates_1423-223.jpg?w=900&t=st=1675093566~exp=1675094166~hmac=4b6cc51dd640738a0b8d4cdb6a6fc8b19f92427e597739d72e4d30ee973ba9e4)',
	'url(https://img.freepik.com/premium-photo/sport-equipments-kettlebell-towels-bottle-water-empty-space-gym-floor_67155-25106.jpg?w=900)', 
	'url(https://img.freepik.com/free-photo/young-fitness-man-studio_7502-5008.jpg?w=900&t=st=1675093630~exp=1675094230~hmac=f6bf44c11ad43fcdb15ea26488cb57665b73decb983367bb9befe408f1bc5dc7)',
	'url(https://images.unsplash.com/photo-1542684377-0b875fde9563?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=359&q=80)',
	'url(https://images.unsplash.com/photo-1542924597-e73e0e35c010?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=372&q=80)',
	'url(https://images.unsplash.com/photo-1544631008-534b4b6c1215?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=353&q=80)',
	];
	
function slidingBackgounds(){
	let body  = document.getElementById('mainBody');
	current = ++current % backgrounds.length;
	body.style.backgroundImage = backgrounds[current];
}

