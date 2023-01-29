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
INSERT INTO `workout` (`id`, `date`, `mood`, `notes`, `enabled`) VALUES (1, '2022-12-01', 3, 'great workout but felt lethargic', 1);
INSERT INTO `workout` (`id`, `date`, `mood`, `notes`, `enabled`) VALUES (2, '2023-01-12', 5, 'just another day', 1);
INSERT INTO `workout` (`id`, `date`, `mood`, `notes`, `enabled`) VALUES (3, '2023-01-14', 10, 'totally pumped today', 1);

COMMIT;


-- -----------------------------------------------------
-- Data for table `exercise`
-- -----------------------------------------------------
START TRANSACTION;
USE `workoutdb`;
INSERT INTO `exercise` (`id`, `name`, `description`, `weight`, `reps`, `sets`, `workout_id`) VALUES (1, 'bench press', 'weighted barbell inverse prone ', 165, 10, 3, 1);
INSERT INTO `exercise` (`id`, `name`, `description`, `weight`, `reps`, `sets`, `workout_id`) VALUES (2, 'leg press', 'prone machine', 45, 10, 3, 1);
INSERT INTO `exercise` (`id`, `name`, `description`, `weight`, `reps`, `sets`, `workout_id`) VALUES (3, 'weighted pull-up', 'pull up with weight', 25, 10, 3, 1);
INSERT INTO `exercise` (`id`, `name`, `description`, `weight`, `reps`, `sets`, `workout_id`) VALUES (4, 'bench press', 'weighted barbell inverse prone ', 165, 10, 3, 2);
INSERT INTO `exercise` (`id`, `name`, `description`, `weight`, `reps`, `sets`, `workout_id`) VALUES (5, 'leg press', 'prone machine', 45, 10, 3, 2);
INSERT INTO `exercise` (`id`, `name`, `description`, `weight`, `reps`, `sets`, `workout_id`) VALUES (6, 'weighted pull-up', 'pull up with weight', 25, 10, 3, 2);
INSERT INTO `exercise` (`id`, `name`, `description`, `weight`, `reps`, `sets`, `workout_id`) VALUES (7, 'bench press', 'weighted barbell inverse prone ', 165, 10, 3, 3);
INSERT INTO `exercise` (`id`, `name`, `description`, `weight`, `reps`, `sets`, `workout_id`) VALUES (8, 'leg press', 'prone machine', 45, 10, 3, 3);
INSERT INTO `exercise` (`id`, `name`, `description`, `weight`, `reps`, `sets`, `workout_id`) VALUES (9, 'weighted pull-up', 'pull up with weight', 25, 10, 3, 3);

COMMIT;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
