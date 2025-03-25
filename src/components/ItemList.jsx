import React from 'react';
import ListItem from './ListItem';

const ItemList = ({ items }) => {
  return (
    <div className="item-list-container">
      {items.map((item) => (
        <ListItem key={item.id} item={item} />
      ))}
    </div>
  );
};


export default ItemList;