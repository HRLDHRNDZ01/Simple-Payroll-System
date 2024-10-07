CREATE database data_base;

USE data_base;

CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    username VARCHAR(50) NOT NULL UNIQUE,
    email VARCHAR(100) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL
);

SHOW TABLES;
DESCRIBE users;

INSERT INTO users (first_name, last_name, username, email, password)
VALUES 
('Jane', 'Smith', 'janesmith', 'jane.smith@example.com', 'hashedPassword1'),
('Alice', 'Johnson', 'alicej', 'alice.johnson@example.com', 'hashedPassword2');

SELECT * FROM users;

INSERT INTO users (first_name, last_name, username, email, password)
VALUES 
('Zayn', 'Malik', 'zaynmalik', 'zayn.malik@example.com', 'zaynmalik');