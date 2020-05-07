-- review section schema

-- drop the database if there exists the same database
DROP DATABASE IF EXISTS reviews;

-- create the database
CREATE DATABASE reviews;

-- change to use the database
USE reviews;


-- create table restaurants
CREATE TABLE restaurants (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  restaurant_name VARCHAR(100)
);

-- create table users
CREATE TABLE users (
  id INT NOT NULL AUTO_INCREMENT,
  user_name VARCHAR(100),
  image_url VARCHAR(100),
  location VARCHAR(100),
  friends INT,
  reviews INT,
  photos INT,
  PRIMARY KEY (id)
);

-- create table posts
CREATE TABLE posts (
  id INT NOT NULL AUTO_INCREMENT,
  rating INT,
  created_at VARCHAR(50),
  check_in INT,
  useful INT,
  funny INT,
  cool INT,
  post VARCHAR(1000),
  PRIMARY KEY (id)
);

CREATE TABLE relation_table (
  post_id INT,
  restaurant_id INT,
  user_id INT,
  FOREIGN KEY (post_id) REFERENCES posts(id),
  FOREIGN KEY (restaurant_id) REFERENCES restaurants(id),
  FOREIGN KEY (user_id) REFERENCES users(id)
);

-- create table post_images
CREATE TABLE post_images (
  post_id INT NOT NULL,
  review_image_url VARCHAR(100) NOT NULL,
  FOREIGN KEY (post_id) REFERENCES posts(id)
);



-- INSERT INTO restaurants (restaurant_name) VALUES ('charlie quick-stop');