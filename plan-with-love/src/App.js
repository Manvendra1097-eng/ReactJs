import React, { useState } from 'react';
import Cards from './components/Cards';
import data from './data';
const App = () => {
  const [tours, setTours] = useState(data);

  function removeCardHandler(id) {
    const toursToShow = tours.filter((tour) => tour.id != id);
    setTours(toursToShow);
  }

  function loadDataHandler() {
    setTours(data);
  }

  if (tours.length === 0) {
    return (
      <div className='app'>
        <h2>No Tour Left</h2>
        <button className='btn-refresh' onClick={loadDataHandler}>
          Refresh
        </button>
      </div>
    );
  }

  return (
    <div className='app'>
      <h1 className='main-heading'>Plan With Manvendra</h1>
      <Cards tours={tours} removeCard={removeCardHandler} />
    </div>
  );
};

export default App;
