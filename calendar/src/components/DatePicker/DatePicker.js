import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const DatePicker = () => {
  const [date, setDate] = useState(new Date());

  const onChange = (date) => {
    setDate(date);
  };

  return (
    <div>
      <Calendar selectRange value={date} onChange={onChange} />
      <p>{date.toString()}</p>
      {/* <p>Date choice: {date.toLocaleDateString()}</p> */}
    </div>
  );
};

export default DatePicker;
