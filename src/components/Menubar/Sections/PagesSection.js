import React from "react";
import ArrowDropDownOutlinedIcon from "@material-ui/icons/ArrowDropDownOutlined";
import Dropdown from "../../Dropdown/Dropdown";
import pages from "./pagesSectionData";

const PagesSection = () => {
  const pagesInfo = (
    <React.Fragment>
      <p>Pages</p>
      <ArrowDropDownOutlinedIcon className="menubar__menus-pages-dropdown-icon" />
    </React.Fragment>
  );
  const pageItems = (
    <React.Fragment>
      {pages.map((page) => (
        <li key={page.pageId}>{page.pageName}</li>
      ))}
    </React.Fragment>
  );
  return (
    <Dropdown
      dropdownInfo={pagesInfo}
      dropdownItems={pageItems}
      left="-25%"
      width="8rem"
    />
    // <div className="menubar__menus-pages">
    //   <p>Pages</p>
    //   <ArrowDropDownOutlinedIcon className="menubar__menus-pages-dropdown-icon" />
    // </div>
  );
};

export default PagesSection;
