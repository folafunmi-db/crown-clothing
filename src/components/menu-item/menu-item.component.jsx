/*jshint esversion: 10 */

import React from "react";

import "./menu-item.styles.scss";

/** The menu item doesn't need to hold any state, so we
 * can start with a functional component
 */

// Destructuring the title off of the props
const MenuItem = ({ title }) => (
  <div className="menu-item">
    <div className="content">
      <h1 className="title">{title}</h1>
      <span className="subtitle">SHOP NOW</span>
    </div>
  </div>
);

export default MenuItem;
