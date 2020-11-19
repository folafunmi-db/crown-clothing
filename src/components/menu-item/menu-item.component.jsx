/*jshint esversion: 10 */

import React from "react";
import { withRouter } from "react-router-dom";
import "./menu-item.styles.scss";

/**Higher order function 'withRouter' takes in a component and
 * renders out a modified component*/

/** The menu item doesn't need to hold any state, so we
 * can start with a functional component
 */

// Destructuring the title off of the props
const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => (
	/** React provides every markup element with a css
	 * property of 'style' and it takes an object that has
	 * prop values equal to css values that are to be applied
	 *
	 * And css values would be in camelCase */
	<div
		className={`${size} menu-item`}
		onClick={() => history.push(`${match.url}${linkUrl}`)}
	>
		<div
			className="background-image"
			style={{
				backgroundImage: `url(${imageUrl})`,
			}}
		/>
		<div className="content">
			<h1 className="title">{title.toUpperCase()}</h1>
			<span className="subtitle">SHOP NOW</span>
		</div>
	</div>
);

/** powering up the menu item component with 'withRouter'
 * and it would return a menu item component that has
 * access to history, location and match props*/

export default withRouter(MenuItem);
