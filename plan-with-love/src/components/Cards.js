import Card from './Card';
const Cards = ({ tours, removeCard }) => {
  return (
    <div className='cards-container'>
      <div className='cards'>
        {tours.map((tour) => {
          return <Card {...tour} removeCard={removeCard} key={tour.id} />;
        })}
      </div>
    </div>
  );
};

export default Cards;
