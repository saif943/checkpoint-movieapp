import React from 'react'
import "./MovieCard.css"
import Card from 'react-bootstrap/Card'
import Rate from './Rate'

const MovieCard =({movie}) => {
  
    return (
        <div >
            <Card  className="moviecard" border="dark" style={{ width: '18rem' }}>
    <Card.Header>
      <h2  style={{fontSize:'20px'}} >{movie.name}</h2>
      <h3 style={{fontSize:'15px'}} >{movie.date}</h3>
    </Card.Header>
    <Card.Body>
      <Card.Title> <img 
            src={movie.image}
            alt={movie.name}
            width='150px'
            /></Card.Title>
      <Card.Text>
      <h2 style={{fontSize:'13px'}}>{movie.description}</h2>
     
          
            <Rate rating={movie.rating} />
      </Card.Text>
    </Card.Body>
  </Card>
        </div>
    )
}

export default MovieCard
