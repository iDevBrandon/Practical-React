import React from "react";

const List = ({ data }) => {
  console.log(data);

  return (
    <>
      {data.map((person) => (
        <li className="person" key={person.id}>
          <img className="person img" src={person.image} alt="" />
          <div className="person name">{person.name}</div>
          <div className="person age">{person.age} years</div>
        </li>
      ))}
    </>
  );
};

export default List;
