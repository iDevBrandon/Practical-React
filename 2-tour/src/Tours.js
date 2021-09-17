import React from "react";
import Tour from "./Tour";
const Tours = ({ tours, filteredTours }) => {
  return (
    <div>
      {tours.map((tour) => (
        <Tour key={tour.id} tour={tour} filteredTours={filteredTours} />
      ))}
    </div>
  );
};

export default Tours;
