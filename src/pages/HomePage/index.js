import React from "react";
import "./style.css";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faFire} from '@fortawesome/free-solid-svg-icons'
const HomePage = () => {
  return (
    <div>
      <button onclick="myFunction()" class="dropbtn">
        <span>My List</span>{" "}
        <i class="fa fa-arrow-circle-down" aria-hidden="true"></i>
      </button>
      <FontAwesomeIcon icon={faFire} />
    </div>
  );
};

export default HomePage;
