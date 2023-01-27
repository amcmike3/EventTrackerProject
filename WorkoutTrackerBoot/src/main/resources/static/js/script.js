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
		console.log(workout.date);
		notes.textContent = workout.notes;
		tr.appendChild(id);	
		tr.appendChild(date);	
		tr.appendChild(notes);	
		tr.addEventListener('click', displayDetails);
		
		table.appendChild(tr);
	}
	contentDiv.appendChild(table);
}

function displayDetails(e){
	let nextWorkout = e.target.nextElementSibling;
	let table = e.target.parentElement;
	
//	e.target.exercises finish this method
	
}







