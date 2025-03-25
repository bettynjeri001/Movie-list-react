import React from 'react';


const ListItem = ({ item }) => {
  return (
    <div className="list-item">
      <h3 className="list-item-title">{item.title}</h3>
      <div className="list-item-details">
        <p>Director: {item.director}</p>
        <p>Year: {item.year}</p>
        <p>Rating: {item.rating}/10</p>
      </div>
    </div>
  );
};

export default ListItem;
