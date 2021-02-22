import React from "react";
import "./MovieCard.css";
import Card from "react-bootstrap/Card";
import Rate from "./Rate";
import { Link } from "react-router-dom";

const MovieCard = ({ movie }) => {
  return (
    <div>
      <Link to={{ pathname: "/Description", state: { movie } }}>
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
            </Card.Text>
          </Card.Body>
        </Card>
      </Link>
    </div>
  );
};

export default MovieCard;
