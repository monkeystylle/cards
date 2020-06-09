import React from 'react';

function Card(props) {
  return (
    <div>
      <h1>{props.name}</h1>
      <h2>{props.email}</h2>
      <h2>{props.number}</h2>
    </div>
  );
}

export default Card;
