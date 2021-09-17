import React, { useState } from "react";

const Tour = ({ tour }) => {
  const [showTour, setShowTour] = useState("");
  const handleClick = () => {
    setShowTour(!showTour);
  };

  return (
    <div className="single-tour">
      <img src={tour.image} alt="" />
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <h2>{tour.name}</h2>
        <small className="tour-price">{tour.price}</small>
      </div>
      <p className="tour-info">{tour.info}</p>
      <button className="delete-btn" onClick={handleClick}>
        Not Interested
      </button>
    </div>
  );
};

export default Tour;
