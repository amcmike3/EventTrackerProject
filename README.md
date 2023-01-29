# EventTrackerProject
- This EventTrackerProject tracks workouts so weight, reps, and sets of exercises can be recorded to track growth. This project features a single HTML page that is manipulated via Javascript DOM manipulation. XHR is used to send and receive JSON Objects from RESTful api's. The Api's are handle via a Java backend utilizing Spring Boot Controllers, Services, and repositories.  

## <a href="http://54.201.168.70:8080/WorkoutTrackerBoot/">Active Deployed Server Link<a/>


## Technologies
- Java
- Javascript
- SQL
- AWS
- TypeScript
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
![](https://github.com/amcmike3/EventTrackerProject/blob/main/Screen%20Shot%202023-01-28%20at%205.23.55%20PM.png)
