import React from "react";
import SubNavItem from "./SubNavItem/SubNavItem";

const SubNav = () => {
  return (
    <div>
      <SubNavItem label="Resturant" icon="fa-utensils" />
      <SubNavItem label="Home service" icon="fa-home" />
      <SubNavItem label="Auto service" icon="fa-truck" />
      <SubNavItem label="More" icon="fa-truck" />
    </div>
  );
};

export default SubNav;
