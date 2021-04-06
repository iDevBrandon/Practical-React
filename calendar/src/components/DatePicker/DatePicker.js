import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const DatePicker = (props) => {
  const [date, setDate] = useState(new Date());

  const onChange = (date) => {
    setDate(date);
  };

  return (
    <div>
      <Calendar selectRange={true} value={date} onChange={onChange} />
      <p>{date.toString()}</p>
      {/* <p>Date choice: {date.toLocaleDateString()}</p> */}

      <button onClick={() => props.changeWord(date.toString())}>
        Click me
      </button>
    </div>
  );
};

export default DatePicker;
