import React from "react";
import { DateContainer } from "./DisplayDate.style";

const Date = () => {
  let today = new window.Date();
  let todayDate = today.getDate();
  let month = today.getMonth() + 1;
  let displayMonth = month < 10 ? `0${month}` : `${month}`;
  let year = today.getFullYear();
  return (
    <DateContainer>
      {year}.{displayMonth}.{todayDate}
    </DateContainer>
  );
};

export default Date;
