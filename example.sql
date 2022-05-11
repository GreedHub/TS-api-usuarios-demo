/* crear tabla
CREATE TABLE `test`.`accounts` (
	`id` INT UNSIGNED NOT NULL	AUTO_INCREMENT,
	`userId` INT UNSIGNED NOT NULL,
	`balance` FLOAT NOT NULL DEFAULT 0,
	PRIMARY KEY (`id`),accountsaccounts
	FOREIGN KEY (`userId`) REFERENCES test.users(`id`) 
)
*/

/* agregar a tabla
INSERT INTO `test`.`users` (`name`, `lastName`, `dni`, `birthDate`)
VALUES ('jorge', 'sanchez', '123456789', DATE("2017-06-15")	 )
*/

/* buscar cosas
SELECT u.id as userId,name,lastname, dni, balance FROM test.users u
inner JOIN test.accounts a
ON u.id = a.userId
WHERE u.`dni` like '6969%'
*/

/* borrar
CREATE TABLE test.borrame(
`id` INT UNSIGNED NOT NULL auto_increment,
PRIMARY KEY (`id`)

DROP TABLE test.borrame
)*/

/* modificar tabla
alter table test.accounts
add column(`lastUpdate` DATETIME default CURRENT_TIMESTAMP)
drop column balance
*/

/* actualizar valores
UPDATE   test.users
SET NAME = 'PEPE'
WHERE dni LIKE '69%'
*/

/*Crear SP
CREATE PROCEDURE `GetUserById`(
	IN `userId` INT
)
LANGUAGE SQL
NOT DETERMINISTIC
CONTAINS SQL
SQL SECURITY DEFINER
COMMENT ''
BEGIN
 SELECT * FROM test.users
 WHERE id = userId;
END;

*/

/* Ejecutar SP
CALL GetUserById(1)
*/
