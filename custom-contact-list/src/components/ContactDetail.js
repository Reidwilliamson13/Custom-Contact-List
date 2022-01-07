import React from "react";
import { Link } from "react-router-dom";
import user from "../images/image.svg";

const ContactDetail = (props) => {
  return (
    <div className="main">
      <div className="ui card centered">
        <div className="image">
          <img src={user} alt="user" />
        </div>
        <div className="content">
          <div className="header">Reid</div>
          <div className="description">reidw19@gmail.com</div>
        </div>
      </div>
    </div>
  );
};

export default ContactDetail;
