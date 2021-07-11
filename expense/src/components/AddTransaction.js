import React, { useState } from "react";

const AddTransaction = () => {
  return (
    <div>
      <h3>Add new transaction</h3>
      <form>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input type="text" placeholder="Enter text..." />
        </div>
      </form>
    </div>
  );
};

export default AddTransaction;
