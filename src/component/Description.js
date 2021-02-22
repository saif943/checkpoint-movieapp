import React from "react";
import Rate from "./Rate";
import "./MovieCard.css";
import Card from "react-bootstrap/Card";
const Description = ({ location }) => {
  const movie = location.state.movie;
  console.log(movie);
  return (
    <div>
      <Card className="moviecard" border="dark" style={{ width: "18rem" }}>
        <Card.Header>
          <h2 style={{ fontSize: "20px" }}>{movie.name}</h2>
          <h3 style={{ fontSize: "15px" }}>{movie.date}</h3>
        </Card.Header>
        <Card.Body>
          <Card.Title>
            {" "}
            <img src={movie.image} alt={movie.name} width="150px" />
          </Card.Title>
          <Card.Text>
            <Rate rating={movie.rating} />
            <h3 style={{ fontSize: "15px" }}>
              Description:{movie.description}
            </h3>
            <a href={movie.details} target="blank" style={{ fontSize: "20px" }}>
              link to trailer
            </a>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Description;
