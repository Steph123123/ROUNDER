import React from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import PropTypes from "prop-types";


export const Maps = (props) => {
  const url = props.place + "&output=embed";
  return (
 <div className="w-100">
  <iframe
    width="100%"
    height="200px"
    frameborder="0"
    target="_parent"
    scrolling="no"
    marginheight="0"
    marginwidth="0"
    src={url}
  >
    
  </iframe>
</div>
  );
};

Maps.propTypes = {
    place: PropTypes.string,
  };
