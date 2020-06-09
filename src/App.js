import React, { useState } from 'react';
import CreateCards from './components/CreateCards';
import Card from './components/Card';

function App() {
  const [cards, setCards] = useState([]);

  function addCard(newCard) {
    setCards((prevCard) => {
      return [...prevCard, newCard];
    });
  }

  return (
    <div>
      <CreateCards onAdd={addCard} />
      {cards.map((cardItem, index) => {
        return (
          <Card
            key={index}
            id={index}
            name={cardItem.name}
            email={cardItem.email}
            number={cardItem.number}
          />
        );
      })}
    </div>
  );
}

export default App;
