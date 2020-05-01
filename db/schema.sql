-- review section schema

-- drop the database if there exists the same database
DROP DATABASE IF EXISTS reviews;

-- create the database
CREATE DATABASE reviews;

-- change to use the database
USE reviews;


-- create table restaurants
CREATE TABLE restaurants (
  id INT NOT NULL AUTO_INCREMENT,
  restaurant_name VARCHAR(100),
  PRIMARY KEY (id)
);

-- create table users
CREATE TABLE users (
  id INT NOT NULL AUTO_INCREMENT,
  user_name VARCHAR(100),
  restaurant_id int,
  location VARCHAR(100),
  friends INT,
  reviews INT,
  phtos INT,
  PRIMARY KEY (id)
);

-- create table posts
CREATE TABLE posts (
  id INT NOT NULL AUTO_INCREMENT,
  rating INT,
  date DATE,
  photo VARCHAR(300),
  check_in INT,
  useful INT,
  funny INT,
  cool INT,
  user_id INT NOT NULL,
  restaurant_id INT NOT NULL,
  FOREIGN KEY (user_id) REFERENCES users(id),
  FOREIGN KEY (restaurant_id) REFERENCES restaurants(id),
  PRIMARY KEY (id)
);

-- create table post_images
CREATE TABLE post_images (
  post_id INT NOT NULL,
  image_url VARCHAR(100) NOT NULL,
  FOREIGN KEY (post_id) REFERENCES posts(id)
);

