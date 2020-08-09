/*jshint esversion: 10 */

import React from "react";
import "./menu-item.styles.scss";

/** The menu item doesn't need to hold any state, so we
 * can start with a functional component
 */

// Destructuring the title off of the props
const MenuItem = ({ title, imageUrl, size }) => (
	/** React provides every markup element with a css
	 * property of 'style' and it takes an object that has
   * prop values equal to css values that are to be applied
   * 
   * And css values would be in camelCase */
	<div
		style={{
			backgroundImage: `url(${imageUrl})`,
		}}
		className={`${size} menu-item`}
	>
		<div className="content">
			<h1 className="title">{title}</h1>
			<span className="subtitle">SHOP NOW</span>
		</div>
	</div>
);

export default MenuItem;
