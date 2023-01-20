-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema workouts
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `workouts` ;

-- -----------------------------------------------------
-- Schema workouts
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `workouts` DEFAULT CHARACTER SET utf8 ;
SHOW WARNINGS;
USE `workouts` ;

-- -----------------------------------------------------
-- Table `workouts`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `workouts` ;

SHOW WARNINGS;
CREATE TABLE IF NOT EXISTS `workouts` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `date` DATETIME NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;

SHOW WARNINGS;

-- -----------------------------------------------------
-- Table `exercises`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `exercises` ;

SHOW WARNINGS;
CREATE TABLE IF NOT EXISTS `exercises` (
  `id` INT NOT NULL,
  `name` VARCHAR(100) NULL,
  `description` TEXT NULL,
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
    REFERENCES `exercises` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_exercises_has_workouts_workouts1`
    FOREIGN KEY (`workouts_id`)
    REFERENCES `workouts` (`id`)
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
-- Data for table `workouts`
-- -----------------------------------------------------
START TRANSACTION;
USE `workouts`;
INSERT INTO `workouts` (`id`, `date`) VALUES (1, '1000-01-01');

COMMIT;


-- -----------------------------------------------------
-- Data for table `exercises`
-- -----------------------------------------------------
START TRANSACTION;
USE `workouts`;
INSERT INTO `exercises` (`id`, `name`, `description`) VALUES (1, 'bench press', 'weighted barbell in prone ');

COMMIT;


-- -----------------------------------------------------
-- Data for table `workouts_have_exercises`
-- -----------------------------------------------------
START TRANSACTION;
USE `workouts`;
INSERT INTO `workouts_have_exercises` (`exercises_id`, `workouts_id`) VALUES (1, 1);

COMMIT;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
