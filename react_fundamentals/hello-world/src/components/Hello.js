import React from "react";

const Hello = () => {
  //   return (
  //     <div>
  //       <h1>Hello iDevBrandon</h1>
  //     </div>
  //   );

  return React.createElement(
    "div",
    { className: "hello" },
    React.createElement("h1", null, "Hello vish")
  );
};

export default Hello;
