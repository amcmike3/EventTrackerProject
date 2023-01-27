console.log("script.js loaded")

window.addEventListener('load', (e) => {
	console.log('page loaded into window')
	init();
})


function init() {
	loadWorkouts();
}


function loadWorkouts() {
	let xhr = new XMLHttpRequest();

	xhr.open('GET', "http://localhost:8082/api/workouts")

	xhr.onreadystatechange = function() {
		if (xhr.readyState === 4) {
			if (xhr.status === 200) {
				console.log(JSON.parse(xhr.responseText));
				displayWorkouts(JSON.parse(xhr.responseText));
				window.workouts = JSON.parse(xhr.responseText);
			} else {
				//TODO display an error
			}
		}
	}

	xhr.send();
}

function displayWorkouts(workoutList) {

	let contentDiv = document.getElementById('content');
	let label = document.createElement('label');
	label.style.color = "gray";
	label.textContent = "Workouts";
	contentDiv.appendChild(label);
	label.for = "contentTable";
	let table = document.createElement('table');
	table.name = "contentTable"
	table.style.border = "solid";
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
		let tr = document.createElement('tr');
		id = document.createElement('td');		
		date = document.createElement('td');		
		notes = document.createElement('td');
		date.style.borderLeft = "solid"
		date.style.borderRight = "solid";	
		
		id.textContent = workout.id;
		date.textContent = workout.date.substring(0,10);
		notes.textContent = workout.notes;
		tr.appendChild(id);	
		tr.appendChild(date);	
		tr.appendChild(notes);
		let button = document.createElement('input');
		button.type = 'submit';
		button.value = 'details';	
		button.addEventListener('click', displayDetails);
		tr.appendChild(button);
		
		
		table.appendChild(tr);
	}
	contentDiv.appendChild(table);
}

function displayDetails(e){
	e.preventDefault()
	removeExercises();
	let workout = e.target.parentElement;
	let table = e.target.parentElement.parentElement;
	let content = document.createElement('div');
	let workoutId = +e.target.previousElementSibling.previousElementSibling.previousElementSibling.textContent;
	let exercises = window.workouts[workoutId - 1].exercises;
	for (let ex of exercises){
		let para = document.createElement('p');
		para.textContent = ex.name + " Reps: " + ex.reps + " Sets: " + ex.sets + " Weight: " + ex.weight;
		content.appendChild(para);	
	}
	window.exercise = content;
	table.insertBefore(content, workout);
	
}

function removeExercises(e){
	if (window.exercise != undefined){
	window.exercise.parentElement.removeChild(window.exercise);		
	}
}






