import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addFoodToCustomer } from "../features/customerSlice";

interface CustomerCardType {
  id: string;
  name: string;
  foods: string[];
}

const CustomerCard = ({ id, name, foods }: CustomerCardType) => {
  const dispatch = useDispatch();

  const [customerInput, setCustomerInput] = useState("");
  return (
    <div className="customer-food-card-container">
      <p>{name}</p>
      <div className="customer-foods-container">
        <div className="customer-food">
          {foods.map((food) => {
            return <div>{food}</div>;
          })}
        </div>
        <div className="customer-food-input-container">
          <input
            value={customerInput}
            onChange={(e) => {
              setCustomerInput(e.target.value);
            }}
          />
          <button
            onClick={() =>
              dispatch(addFoodToCustomer({ id, food: customerInput }))
            }
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default CustomerCard;
