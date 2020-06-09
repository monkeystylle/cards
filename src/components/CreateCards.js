import React, { useState } from 'react';

function CreateCards(props) {
  const [card, setCard] = useState({
    name: '',
    email: '',
    number: '',
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setCard((prevCard) => {
      return {
        ...prevCard,
        [name]: value,
      };
    });
  }

  function submitCard(event) {
    props.onAdd(card);
    setCard({
      name: '',
      email: '',
      number: '',
    });
    event.preventDefault();
  }

  return (
    <div>
      <form>
        <input
          name="name"
          value={card.name}
          placeholder="name"
          onChange={handleChange}
        />
        <input
          name="email"
          value={card.email}
          placeholder="email"
          onChange={handleChange}
        />
        <input
          name="number"
          value={card.number}
          placeholder="number"
          onChange={handleChange}
        />

        <button onClick={submitCard}>Add</button>
      </form>
    </div>
  );
}

export default CreateCards;
