import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Movies = (props) => {
  // console.log(props.movie);
  const {poster_path,title,id} = props.movie
  return (
    <div className="col-md-3 my-3">
      <Card style={{ width: '18rem' }} className="p-3">
        <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w1280/${poster_path}`} />
        <Card.Body  className="text-center">
          <Card.Title>{title}</Card.Title>
          <Button as={Link} to={`/movie/${id}`} variant="primary">Show Details</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Movies;