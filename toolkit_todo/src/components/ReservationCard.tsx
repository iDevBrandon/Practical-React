import React from "react";
import { useDispatch } from "react-redux";
import { addCustomer } from "../features/customerSlice";
import { removeReservation } from "../features/reservationSlice";
import { v4 as uuid } from "uuid";

interface IReservationCardTypes {
  name: string;
  index: number;
}

const ReservationCard = ({ name, index }: IReservationCardTypes) => {
  const dispatch = useDispatch();
  const handleReservationRemove = () => {
    dispatch(removeReservation(index));
    dispatch(
      addCustomer({
        id: uuid(),
        name,
        foods: [],
      })
    );
  };

  return (
    <div
      className="reservation-card-container"
      onClick={handleReservationRemove}
    >
      {name}
    </div>
  );
};

export default ReservationCard;
