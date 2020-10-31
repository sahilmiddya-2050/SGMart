import React from "react";
import ArrowDropDownOutlinedIcon from "@material-ui/icons/ArrowDropDownOutlined";
import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined";
import places from "./locationData.js";
import Dropdown from "../../Dropdown/Dropdown";

const LocationSection = () => {
  const locationDropdownInfo = (
    <React.Fragment>
      <LocationOnOutlinedIcon />
      <p className="location__indicator__name">Howrah</p>
      <ArrowDropDownOutlinedIcon />
    </React.Fragment>
  );
  const locationDropdownItems = (
    <React.Fragment>
      {places.map((place) => (
        <li className="aligned" key={place.placeId}>
          <LocationOnOutlinedIcon />
          <p className="place__name">{place.placeName}</p>
        </li>
      ))}
    </React.Fragment>
  );
  return (
    <div className="navbar__location">
      <Dropdown
        dropdownInfo={locationDropdownInfo}
        dropdownItems={locationDropdownItems}
        top="100%"
      />
    </div>
  );
};

export default LocationSection;
