# EventTrackerProject
- This EventTrackerProject tracks workouts so weight, reps, and sets of exercises can be recorded to track growth.

##<a href="http://54.201.168.70:8080/WorkoutTrackerBoot/">Active Deployed Server<a/>


## Technologies
Java, SQL, AWS, Javascript, TypeScript, Angular, Spring Data JPA, Spring Boot, DOM, REST, JSON, AJAX, XHR, Bootstrap, HTML, CSS.

## <a href="https://github.com/amcmike3/EventTrackerProject/blob/main/postman/postman_collection.json"> Postman Collection<a/>
- Importable postman collection at link above
### Restful API Mappings:
-
- http://localhost:8082/api/workouts/1
- http://localhost:8082/api/exercises
- http://localhost:8082/api/exercises/1

| HTTP Verb | URI                  | Request Body | Response Body | Purpose |
|-----------|----------------------|--------------|---------------|---------|
| GET       | `WorkoutTrackerBoot/api/workouts`      |              | Collection all workouts | **List** or **collection** endpoint |
| GET       | `WorkoutTrackerBoot/api/workouts/{id}`   |              | Representation of _book_ `17` | **Retrieve** endpoint |
| POST      | `WorkoutTrackerBoot/api/workouts`      | Representation of a new _book_ resource | Description of the result of the operation | **Create** endpoint |
| PUT       | `WorkoutTrackerBoot/api/workouts`   | Representation of a new version of _book_ `17` | | **Replace** endpoint |
| PATCH     | `Not Allowed`   |  | |  |
| DELETE    | `WorkoutTrackerBoot/api/workouts/{id}`   |              | | **Delete** route changes enabled to false in DB |



## Database Schema
![](https://github.com/amcmike3/EventTrackerProject/blob/main/Screen%20Shot%202023-01-23%20at%208.20.34%20AM.png)
