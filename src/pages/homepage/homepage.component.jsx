/*jshint esversion: 10 */

import React from "react";
import Directory from "../../components/directory/directory.component";
import "./homepage.styles.scss";

/** A functional component is used because no lifecycle
 * methods are needed this point, neither does the state
 * need to be stored
 */

const HomePage = () => (
  <div className="homepage">
    <Directory />
  </div>
);

export default HomePage;
