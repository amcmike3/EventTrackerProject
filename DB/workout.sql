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
  PRIMARY KEY (`id`))
ENGINE = InnoDB;

SHOW WARNINGS;

-- -----------------------------------------------------
-- Table `workouts_have_exercises`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `workouts_have_exercises` ;

SHOW WARNINGS;
CREATE TABLE IF NOT EXISTS `workouts_have_exercises` (
  `exercises_id` INT NOT NULL,
  `workouts_id` INT NOT NULL,
  PRIMARY KEY (`exercises_id`, `workouts_id`),
  CONSTRAINT `fk_exercises_has_workouts_exercises`
    FOREIGN KEY (`exercises_id`)
    REFERENCES `exercise` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_exercises_has_workouts_workouts1`
    FOREIGN KEY (`workouts_id`)
    REFERENCES `workout` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

SHOW WARNINGS;
CREATE INDEX `fk_exercises_has_workouts_workouts1_idx` ON `workouts_have_exercises` (`workouts_id` ASC);

SHOW WARNINGS;
CREATE INDEX `fk_exercises_has_workouts_exercises_idx` ON `workouts_have_exercises` (`exercises_id` ASC);

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
INSERT INTO `workout` (`id`, `date`, `mood`, `notes`) VALUES (1, '1000-01-01', 3, 'great workout but felt lethargic');
INSERT INTO `workout` (`id`, `date`, `mood`, `notes`) VALUES (2, '1000-01-12', 5, 'just another day');
INSERT INTO `workout` (`id`, `date`, `mood`, `notes`) VALUES (3, '1000-01-04', 10, 'totally pumped today');

COMMIT;


-- -----------------------------------------------------
-- Data for table `exercise`
-- -----------------------------------------------------
START TRANSACTION;
USE `workoutdb`;
INSERT INTO `exercise` (`id`, `name`, `description`, `weight`) VALUES (1, 'bench press', 'weighted barbell inverse prone ', 165);
INSERT INTO `exercise` (`id`, `name`, `description`, `weight`) VALUES (2, 'leg press', 'prone machine', 45);
INSERT INTO `exercise` (`id`, `name`, `description`, `weight`) VALUES (3, 'weighted pull-up', 'pull up with weight', 25);

COMMIT;


-- -----------------------------------------------------
-- Data for table `workouts_have_exercises`
-- -----------------------------------------------------
START TRANSACTION;
USE `workoutdb`;
INSERT INTO `workouts_have_exercises` (`exercises_id`, `workouts_id`) VALUES (1, 1);
INSERT INTO `workouts_have_exercises` (`exercises_id`, `workouts_id`) VALUES (1, 2);
INSERT INTO `workouts_have_exercises` (`exercises_id`, `workouts_id`) VALUES (1, 3);
INSERT INTO `workouts_have_exercises` (`exercises_id`, `workouts_id`) VALUES (2, 3);
INSERT INTO `workouts_have_exercises` (`exercises_id`, `workouts_id`) VALUES (2, 2);
INSERT INTO `workouts_have_exercises` (`exercises_id`, `workouts_id`) VALUES (2, 1);
INSERT INTO `workouts_have_exercises` (`exercises_id`, `workouts_id`) VALUES (3, 1);
INSERT INTO `workouts_have_exercises` (`exercises_id`, `workouts_id`) VALUES (3, 2);
INSERT INTO `workouts_have_exercises` (`exercises_id`, `workouts_id`) VALUES (3, 3);

COMMIT;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
