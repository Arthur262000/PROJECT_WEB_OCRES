import axios from "axios";
import React, { useEffect } from 'react';
import Header from './components/Header/Header';
import './App.css';
import { useState } from "react";
import SingleContent from "./components/SingleContent/SingleContent";

function App() {

  const [content, setContent] = useState([]);

  const fetchNowPlaying = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.REACT_APP_API_KEY}`
    
    );


    console.log(data);

    setContent(data.results);

  };

  useEffect(() => {
    fetchNowPlaying();
  }, []);

  return (
    <div>
      <Header />
      <div className="App">
      <span className="section">A l'Affiche</span>
      <div className="NowPlaying">
        {content && content.map((c) => <SingleContent 
        key={c.id} 
        id={c.id} 
        poster={c.poster_path} 
        title={c.title || c.name} 
        date={c.first_air_date || c.release_date} 
        vote_average={c.vote_average}
        /> )}
      </div>
    </div>
    </div>
  );
};

export default App;
