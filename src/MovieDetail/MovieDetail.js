import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const MovieDetail = () => {
  const {id} = useParams()
  const [movieDetail, setMovieDetail] = useState({})
  const {title,overview,poster_path,release_date,homepage} = movieDetail
  const apiKey = "870967436c1517d581daf3b245495790"

  useEffect(()=>{
    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=en-US`)
    .then(res => res.json())
    .then(data => {
      console.log(data);
      setMovieDetail(data)})
  },[id])

  return (
    <div className="container">
      <div className="row mt-5">
        <div className="col-md-6">
          <img className="img-fluid" src={`https://image.tmdb.org/t/p/w1280/${poster_path}`} alt=""/>
        </div>
        <div className="col-md-6">
          <h3>Title: {title}</h3>
          <p>Release Date: {release_date}</p>
          <p>Overview: {overview}</p>
          <p>Homepage: {homepage}</p>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;