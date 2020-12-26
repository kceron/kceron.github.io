import React from 'react';
import { Link } from 'gatsby';

function Footer({ title, heading, avatar }) {
  return (
    <div id="logo">
      <Link to="/">
        {/* <span className="image avatar48">
          <img height="128px" src={avatar} alt="" />
        </span> */}

        <h1 id="title">{title}</h1>
        <p>{heading}</p>
      </Link>
    </div>
  );
}

export default Footer;