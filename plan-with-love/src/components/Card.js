import React, { useState } from 'react';

const Card = ({ id, image, name, info, price, removeCard }) => {
  const [readMore, setReadMore] = useState(true);

  const desc = readMore ? `${info.slice(0, 200)}...` : info;
  const moreInfo = readMore ? 'Read More' : 'Read Less';
  console.log(moreInfo);

  const readMoreHandler = () => {
    setReadMore(!readMore);
  };

  return (
    <div className='card'>
      <div className='img-box'>
        <img src={image} loading='lazy' />
      </div>
      <div className='tour-info'>
        <p>₹ {price}</p>
        <p>{name}</p>

        <p>
          {desc} <span onClick={readMoreHandler}>{moreInfo}</span>
        </p>
      </div>
      <button className='btn' onClick={() => removeCard(id)}>
        Not Intrested
      </button>
    </div>
  );
};

export default Card;
