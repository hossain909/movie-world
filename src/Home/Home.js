import React, { useEffect, useState } from 'react';
import Movies from '../Movies/Movies';

const Home = () => {
  const [movies, setMovies] = useState([])
  const apiKey = "870967436c1517d581daf3b245495790"
  useEffect(()=>{
    fetch(`https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${apiKey}`)
    .then(res => res.json())
    .then(data => setMovies(data.results))
  },[])
  return (
    <div className="container mt-5">
      <div className="row">
        {movies.map(item => <Movies movie={item} key={item.id}></Movies>)}
      </div>
    </div>
  );
};

export default Home;