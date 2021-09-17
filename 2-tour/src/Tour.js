import React, { useState } from "react";

const Tour = ({ tour, filteredTours }) => {
   const [readMore, setReadMore] = useState(false);

  return (
    <article className="single-tour">
      <img src={tour.image} alt={tour.name} />
      <div className="tour-info">
        <h2>{tour.name}</h2>
        <small className="tour-price">{tour.price}</small>
      </div>
      <div className="tour-info">
        {readMore ? tour.info : `${tour.info.substring(0, 200)}...`}
        <button onClick={() => setReadMore(!readMore)}>
          {readMore ? "Summarise" : "Read More"}
        </button>
      </div>
      <button className="delete-btn" onClick={() => filteredTours(tour.id)}>
        Not Interested
      </button>
    </article>
  );
};

export default Tour;
