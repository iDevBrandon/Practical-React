import React from "react";

const AddTransaction = () => {
  return (
    <div>
      <h3>Add new Transaction</h3>
      <form>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input type="text" placeholder="Enter text..." />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            Amount <br />
            (negative - positive, positive - negative)
          </label>
          <input type="number" placeholder="Enter amount..." />
        </div>
      </form>
    </div>
  );
};

export default AddTransaction;
