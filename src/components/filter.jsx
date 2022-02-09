import {useEffect} from 'react'

import React from 'react';

const Filter = ({popular, setFiltered, activeGenre, setActiveGenre} ) => {


    useEffect(() => {
        if(activeGenre === 0) {
            setFiltered(popular);
            return
        }  const filter = popular.filter(movie => movie.genre_ids.includes(activeGenre));
        setFiltered(filter);
    } , [activeGenre])
  return <div className="filter-container">
      <button className={activeGenre === 0 ? "active" : ""} onClick={()=> setActiveGenre(0)}>All</button>
      <button className={activeGenre === 35 ? "active" : ""} onClick={()=> setActiveGenre(35)} >Comedy</button>
      <button className={activeGenre === 28 ? "active" : ""} onClick={()=> setActiveGenre(28)} >Action</button>
  </div>;
};

export default Filter;
