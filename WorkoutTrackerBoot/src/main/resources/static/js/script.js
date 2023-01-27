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
	let table = document.createElement('table');
	let head = document.createElement('thead');
	let th = document.createElement('th');
	th.textContent = "Workouts";
	head.appendChild(th);
	table.appendChild(head);
	let body = document.createElement('tbody');
	for (let workout of workoutList) {
		let tr = document.createElement('tr');
		tr.textContent = "mood: " + workout.mood + " notes: " + workout.notes;
		table.appendChild(tr);
	}

	contentDiv.appendChild(table);







}