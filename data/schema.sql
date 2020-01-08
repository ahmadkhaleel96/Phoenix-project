DROP TABLE IF EXISTS book, movie;

CREATE TABLE book (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255),
    author VARCHAR(255),
    isbn VARCHAR(255),
    image_url VARCHAR(255),
    description TEXT,
    bookshelf VARCHAR(255)
);

CREATE TABLE movie (
    id SERIAL PRIMARY KEY,
    Title VARCHAR(255),
    Year NUMERIC(4),
    Rated VARCHAR(255),
    Poster VARCHAR(255),
    Plot TEXT,
    Runtime VARCHAR(255),
    Actors VARCHAR(255),
    imdbRating VARCHAR(255),
    Writer VARCHAR(255)
);