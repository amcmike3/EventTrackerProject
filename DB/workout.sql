-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema workoutdb
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `workoutdb` ;

-- -----------------------------------------------------
-- Schema workoutdb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `workoutdb` DEFAULT CHARACTER SET utf8 ;
SHOW WARNINGS;
USE `workoutdb` ;

-- -----------------------------------------------------
-- Table `workout`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `workout` ;

SHOW WARNINGS;
CREATE TABLE IF NOT EXISTS `workout` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `date` DATETIME NOT NULL,
  `mood` INT NULL,
  `notes` TEXT NULL,
  `enabled` TINYINT NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;

SHOW WARNINGS;

-- -----------------------------------------------------
-- Table `exercise`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `exercise` ;

SHOW WARNINGS;
CREATE TABLE IF NOT EXISTS `exercise` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(200) NOT NULL,
  `description` TEXT NULL,
  `weight` INT NULL,
  `reps` INT NULL,
  `sets` INT NULL,
  `workout_id` INT NOT NULL,
  `enabled` TINYINT NOT NULL DEFAULT 1,
  PRIMARY KEY (`id`, `workout_id`),
  CONSTRAINT `fk_exercise_workout`
    FOREIGN KEY (`workout_id`)
    REFERENCES `workout` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

SHOW WARNINGS;
CREATE INDEX `fk_exercise_workout_idx` ON `exercise` (`workout_id` ASC);

SHOW WARNINGS;
SET SQL_MODE = '';
DROP USER IF EXISTS workout;
SET SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';
SHOW WARNINGS;
CREATE USER 'workout' IDENTIFIED BY 'workout';

GRANT SELECT, INSERT, TRIGGER, UPDATE, DELETE ON TABLE * TO 'workout';
SHOW WARNINGS;

-- -----------------------------------------------------
-- Data for table `workout`
-- -----------------------------------------------------
START TRANSACTION;
USE `workoutdb`;
INSERT INTO `workout` (`id`, `date`, `mood`, `notes`, `enabled`) VALUES (1, '2023-01-01', 3, 'great workout but felt lethargic', 1);
INSERT INTO `workout` (`id`, `date`, `mood`, `notes`, `enabled`) VALUES (2, '2023-01-12', 5, 'just another day', 1);
INSERT INTO `workout` (`id`, `date`, `mood`, `notes`, `enabled`) VALUES (3, '2023-01-14', 10, 'totally pumped today', 1);
INSERT INTO `workout` (`id`, `date`, `mood`, `notes`, `enabled`) VALUES (4, '2023-01-16', 3, 'Legs', 1);
INSERT INTO `workout` (`id`, `date`, `mood`, `notes`, `enabled`) VALUES (5, '2023-01-18', 9, 'Back', 1);
INSERT INTO `workout` (`id`, `date`, `mood`, `notes`, `enabled`) VALUES (6, '2023-01-20', 3, 'Chest', 1);
INSERT INTO `workout` (`id`, `date`, `mood`, `notes`, `enabled`) VALUES (7, '2023-01-22', 6, 'Legs', 1);
INSERT INTO `workout` (`id`, `date`, `mood`, `notes`, `enabled`) VALUES (8, '2023-01-24', 6, 'Back', 1);
INSERT INTO `workout` (`id`, `date`, `mood`, `notes`, `enabled`) VALUES (9, '2023-01-26', 4, 'Chest', 1);
INSERT INTO `workout` (`id`, `date`, `mood`, `notes`, `enabled`) VALUES (10, '2023-01-28', 4, 'Legs', 1);
INSERT INTO `workout` (`id`, `date`, `mood`, `notes`, `enabled`) VALUES (11, '2023-01-30', 7, 'Back', 1);
INSERT INTO `workout` (`id`, `date`, `mood`, `notes`, `enabled`) VALUES (12, '2023-02-01', 4, 'Chest', 1);
INSERT INTO `workout` (`id`, `date`, `mood`, `notes`, `enabled`) VALUES (13, '2023-02-03', 5, 'Legs', 1);
INSERT INTO `workout` (`id`, `date`, `mood`, `notes`, `enabled`) VALUES (14, '2023-02-05', 1, 'Back', 1);

COMMIT;


-- -----------------------------------------------------
-- Data for table `exercise`
-- -----------------------------------------------------
START TRANSACTION;
USE `workoutdb`;
INSERT INTO `exercise` (`id`, `name`, `description`, `weight`, `reps`, `sets`, `workout_id`, `enabled`) VALUES (1, 'bench press', 'weighted barbell inverse prone', 165, 10, 3, 1, 1);
INSERT INTO `exercise` (`id`, `name`, `description`, `weight`, `reps`, `sets`, `workout_id`, `enabled`) VALUES (2, 'leg press', 'prone machine', 45, 10, 3, 1, 1);
INSERT INTO `exercise` (`id`, `name`, `description`, `weight`, `reps`, `sets`, `workout_id`, `enabled`) VALUES (3, 'weighted pull-up', 'pull up with weight', 25, 10, 3, 1, 1);
INSERT INTO `exercise` (`id`, `name`, `description`, `weight`, `reps`, `sets`, `workout_id`, `enabled`) VALUES (4, 'bench press', 'weighted barbell inverse prone', 165, 10, 3, 2, 1);
INSERT INTO `exercise` (`id`, `name`, `description`, `weight`, `reps`, `sets`, `workout_id`, `enabled`) VALUES (5, 'leg press', 'prone machine', 45, 10, 3, 2, 1);
INSERT INTO `exercise` (`id`, `name`, `description`, `weight`, `reps`, `sets`, `workout_id`, `enabled`) VALUES (6, 'weighted pull-up', 'pull up with weight', 25, 10, 3, 2, 1);
INSERT INTO `exercise` (`id`, `name`, `description`, `weight`, `reps`, `sets`, `workout_id`, `enabled`) VALUES (7, 'bench press', 'weighted barbell inverse prone', 165, 10, 3, 3, 1);
INSERT INTO `exercise` (`id`, `name`, `description`, `weight`, `reps`, `sets`, `workout_id`, `enabled`) VALUES (8, 'leg press', 'prone machine', 45, 10, 3, 3, 1);
INSERT INTO `exercise` (`id`, `name`, `description`, `weight`, `reps`, `sets`, `workout_id`, `enabled`) VALUES (9, 'weighted pull-up', 'pull up with weight', 25, 10, 3, 3, 1);
INSERT INTO `exercise` (`id`, `name`, `description`, `weight`, `reps`, `sets`, `workout_id`, `enabled`) VALUES (10, 'Squats', 'Squats', 135, 10, 3, 4, 1);
INSERT INTO `exercise` (`id`, `name`, `description`, `weight`, `reps`, `sets`, `workout_id`, `enabled`) VALUES (11, 'Leg Extensions', 'Leg Extensions', 70, 10, 3, 4, 1);
INSERT INTO `exercise` (`id`, `name`, `description`, `weight`, `reps`, `sets`, `workout_id`, `enabled`) VALUES (12, 'Weighted Lunges', 'Weighted Lunges', 50, 10, 3, 4, 1);
INSERT INTO `exercise` (`id`, `name`, `description`, `weight`, `reps`, `sets`, `workout_id`, `enabled`) VALUES (13, 'Weighted pull-up', 'Weighted pull-up', 25, 10, 3, 5, 1);
INSERT INTO `exercise` (`id`, `name`, `description`, `weight`, `reps`, `sets`, `workout_id`, `enabled`) VALUES (14, 'Dumbbell row', 'Dumbbell row', 60, 10, 3, 5, 1);
INSERT INTO `exercise` (`id`, `name`, `description`, `weight`, `reps`, `sets`, `workout_id`, `enabled`) VALUES (15, 'Dead-Lift', 'Dead-Lift', 180, 10, 3, 5, 1);
INSERT INTO `exercise` (`id`, `name`, `description`, `weight`, `reps`, `sets`, `workout_id`, `enabled`) VALUES (16, 'Bench press', 'Bench press', 165, 10, 3, 6, 1);
INSERT INTO `exercise` (`id`, `name`, `description`, `weight`, `reps`, `sets`, `workout_id`, `enabled`) VALUES (17, 'DumbBell press', 'DumbBell press', 60, 10, 3, 6, 1);
INSERT INTO `exercise` (`id`, `name`, `description`, `weight`, `reps`, `sets`, `workout_id`, `enabled`) VALUES (18, 'Dumbbell Flye', 'Dumbbell Flye', 25, 10, 3, 6, 1);
INSERT INTO `exercise` (`id`, `name`, `description`, `weight`, `reps`, `sets`, `workout_id`, `enabled`) VALUES (19, 'Squats', 'Squats', 135, 10, 3, 7, 1);
INSERT INTO `exercise` (`id`, `name`, `description`, `weight`, `reps`, `sets`, `workout_id`, `enabled`) VALUES (20, 'Leg Extensions', 'Leg Extensions', 70, 10, 3, 7, 1);
INSERT INTO `exercise` (`id`, `name`, `description`, `weight`, `reps`, `sets`, `workout_id`, `enabled`) VALUES (21, 'Weighted Lunges', 'Weighted Lunges', 50, 10, 3, 7, 1);
INSERT INTO `exercise` (`id`, `name`, `description`, `weight`, `reps`, `sets`, `workout_id`, `enabled`) VALUES (22, 'Weighted pull-up', 'Weighted pull-up', 25, 10, 3, 8, 1);
INSERT INTO `exercise` (`id`, `name`, `description`, `weight`, `reps`, `sets`, `workout_id`, `enabled`) VALUES (23, 'Dumbbell row', 'Dumbbell row', 60, 10, 3, 8, 1);
INSERT INTO `exercise` (`id`, `name`, `description`, `weight`, `reps`, `sets`, `workout_id`, `enabled`) VALUES (24, 'Dead-Lift', 'Dead-Lift', 180, 10, 3, 8, 1);
INSERT INTO `exercise` (`id`, `name`, `description`, `weight`, `reps`, `sets`, `workout_id`, `enabled`) VALUES (25, 'Bench press', 'Bench press', 165, 10, 3, 9, 1);
INSERT INTO `exercise` (`id`, `name`, `description`, `weight`, `reps`, `sets`, `workout_id`, `enabled`) VALUES (26, 'DumbBell press', 'DumbBell press', 60, 10, 3, 9, 1);
INSERT INTO `exercise` (`id`, `name`, `description`, `weight`, `reps`, `sets`, `workout_id`, `enabled`) VALUES (27, 'Dumbbell Flye', 'Dumbbell Flye', 25, 10, 3, 9, 1);
INSERT INTO `exercise` (`id`, `name`, `description`, `weight`, `reps`, `sets`, `workout_id`, `enabled`) VALUES (28, 'Squats', 'Squats', 135, 10, 3, 10, 1);
INSERT INTO `exercise` (`id`, `name`, `description`, `weight`, `reps`, `sets`, `workout_id`, `enabled`) VALUES (29, 'Leg Extensions', 'Leg Extensions', 70, 10, 3, 10, 1);
INSERT INTO `exercise` (`id`, `name`, `description`, `weight`, `reps`, `sets`, `workout_id`, `enabled`) VALUES (30, 'Weighted Lunges', 'Weighted Lunges', 50, 10, 3, 10, 1);
INSERT INTO `exercise` (`id`, `name`, `description`, `weight`, `reps`, `sets`, `workout_id`, `enabled`) VALUES (31, 'Weighted pull-up', 'Weighted pull-up', 25, 10, 3, 11, 1);
INSERT INTO `exercise` (`id`, `name`, `description`, `weight`, `reps`, `sets`, `workout_id`, `enabled`) VALUES (32, 'Dumbbell row', 'Dumbbell row', 60, 10, 3, 11, 1);
INSERT INTO `exercise` (`id`, `name`, `description`, `weight`, `reps`, `sets`, `workout_id`, `enabled`) VALUES (33, 'Dead-Lift', 'Dead-Lift', 180, 10, 3, 11, 1);
INSERT INTO `exercise` (`id`, `name`, `description`, `weight`, `reps`, `sets`, `workout_id`, `enabled`) VALUES (34, 'Bench press', 'Bench press', 165, 10, 3, 12, 1);
INSERT INTO `exercise` (`id`, `name`, `description`, `weight`, `reps`, `sets`, `workout_id`, `enabled`) VALUES (35, 'DumbBell press', 'DumbBell press', 60, 10, 3, 12, 1);
INSERT INTO `exercise` (`id`, `name`, `description`, `weight`, `reps`, `sets`, `workout_id`, `enabled`) VALUES (36, 'Dumbbell Flye', 'Dumbbell Flye', 25, 10, 3, 12, 1);
INSERT INTO `exercise` (`id`, `name`, `description`, `weight`, `reps`, `sets`, `workout_id`, `enabled`) VALUES (37, 'Squats', 'Squats', 135, 10, 3, 13, 1);
INSERT INTO `exercise` (`id`, `name`, `description`, `weight`, `reps`, `sets`, `workout_id`, `enabled`) VALUES (38, 'Leg Extensions', 'Leg Extensions', 70, 10, 3, 13, 1);
INSERT INTO `exercise` (`id`, `name`, `description`, `weight`, `reps`, `sets`, `workout_id`, `enabled`) VALUES (39, 'Weighted Lunges', 'Weighted Lunges', 50, 10, 3, 13, 1);
INSERT INTO `exercise` (`id`, `name`, `description`, `weight`, `reps`, `sets`, `workout_id`, `enabled`) VALUES (40, 'Weighted pull-up', 'Weighted pull-up', 25, 10, 3, 14, 1);
INSERT INTO `exercise` (`id`, `name`, `description`, `weight`, `reps`, `sets`, `workout_id`, `enabled`) VALUES (41, 'Dumbbell row', 'Dumbbell row', 60, 10, 3, 14, 1);
INSERT INTO `exercise` (`id`, `name`, `description`, `weight`, `reps`, `sets`, `workout_id`, `enabled`) VALUES (42, 'Dead-Lift', 'Dead-Lift', 180, 10, 3, 14, 1);

COMMIT;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
