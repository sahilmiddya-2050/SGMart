import DashboardOutlinedIcon from "@material-ui/icons/DashboardOutlined";
import React from "react";

const CategorySection = () => {
  return (
    <div className="menubar__category">
      <DashboardOutlinedIcon className="menubar__category-icon" />
      <p>Select Category</p>
    </div>
  );
};

export default CategorySection;
