import React from "react";
import Tour from "./Tour";
const Tours = ({ tours }) => {
  return (
    <div>
      {tours.length > 0
        ? tours.map((tour) => <Tour key={tour.id} tour={tour} />)
        : "No Tours Left"}
    </div>
  );
};

export default Tours;
