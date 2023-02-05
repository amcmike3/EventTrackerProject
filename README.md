# EventTrackerProject
## Description
- This EventTrackerProject tracks workouts so weight, reps, and sets of exercises can be recorded to track growth. <strong><em> This project started out as a single HTML page that was dynamically changed via Javascript DOM manipulation and XHR to send and receive JSON Objects from RESTful api's. </em> </strong> Over the course of this project the decision was made to change the front end to angular. This entire website is still a dynamic single page application but the data manipulation is accomplished through data-binding and DOM manipulation is offloaded to angualr. the logic that was offloaded by using Angular did not end there though. Dependency injection and modularization helps to keep code clean and maintainable. Stylings are handled utilizing Bootstrap and CSS.
- The Api's are handled via a Java backend utilizing Spring Boot and JPA. The underlying Database is a MySQL database and communication with the database is handled using Hibernate in conjunction with JPA. With this app there are full CRUD operations on on two database tables representing Workouts and exercises.

## <a href="http://54.201.168.70:8080/WorkoutTrackerBoot/">Active Deployed Server Link<a/>


## Technologies
- Java 
- Javascript
- TypeScript
- SQL
- JPQL
- AWS
- Angular
- Spring Data JPA
- Spring Boot
- DOM
- REST
- JSON
- AJAX
- XHR
- Bootstrap
- HTML
- CSS
- Hibernate
- JPA
- JUnit
- TDD

## <a href="https://github.com/amcmike3/EventTrackerProject/blob/main/postman/postman_collection.json"> Postman Collection Link<a/>
- Importable postman collection at link above for a local instances only
## Restful API Mappings:
#### workouts:

| HTTP Verb | URI                  | Request Body | Response Body | Purpose |
|-----------|----------------------|--------------|---------------|---------|
| GET       | `http://54.201.168.70:8080/WorkoutTrackerBoot/api/workouts`      |              | Collection all workouts | **List** or **collection** endpoint |
| GET       | `http://54.201.168.70:8080/WorkoutTrackerBoot/api/workouts/1`   |              | Representation of workout `1` | **Retrieve** endpoint |
| POST      | `http://54.201.168.70:8080/WorkoutTrackerBoot/api/workouts`      | Representation of a workout | Description of the result of the operation | **Create** endpoint |
| PUT       | `http://54.201.168.70:8080/WorkoutTrackerBoot/api/workouts`   | Representation of a new version of workout `1` | | **Replace** endpoint |
| PATCH     | `Not Allowed`   |  | |  |
| DELETE    | `http://54.201.168.70:8080/WorkoutTrackerBoot/api/workouts/1`   |              | | **Delete** route changes enabled column to false in DB |

#### exercises:
| HTTP Verb | URI                  | Request Body | Response Body | Purpose |
|-----------|----------------------|--------------|---------------|---------|
| GET       | `http://54.201.168.70:8080/WorkoutTrackerBoot/api/exercises`      |              | Collection all exercises | **List** or **collection** endpoint |
| GET       | `http://54.201.168.70:8080/WorkoutTrackerBoot/api/exercises/1`   |              | Representation of exercise `1` | **Retrieve** endpoint |
| POST      | `http://54.201.168.70:8080/WorkoutTrackerBoot/api/workouts/1/exercises`      | Representation of a exercise | Description of the result of the operation | **Create** endpoint |
| PUT       | `http://54.201.168.70:8080/WorkoutTrackerBoot/api/exercises`   | Representation of a new version of exercise `1` | | **Replace** endpoint |
| PATCH     | `Not Allowed`   |  | |  |
| DELETE    | `Not Allowed`    |              | | |

## Database Schema
![](https://github.com/amcmike3/EventTrackerProject/blob/main/images/Screen%20Shot%202023-01-28%20at%205.23.55%20PM.png)

## Future implementations:
- ~~Add the ability to update and delete Exercises.~~
- create a nav bar with several options to create workouts, search for workouts, and show a limited view of workouts.
- show a limited veiw of workouts and load more as scrolling occurs.
- add more stylings with pretty graphics.

## Limitations:
- Each exercise is its own entity in the DB and only associated with one workout. It would be better to be able to reference the same exercises in multiple workouts but due to limitations on Many To Many relationships from JPA there is not an elegant way to accomplish this.
- Every time page is loaded all the workouts stored in the db are loaded. This will not be optimal as the size of the DB grows.
