CREATE DATABASE budget_db;

CREATE TABLE budget(
id SERIAL PRIMARY KEY,
concept VARCHAR(30),
amount DECIMAL (10,2),
date DATE,
type VARCHAR(10)
);
