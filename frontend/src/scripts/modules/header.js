console.log( 'Headers says wsup' )

import React from 'react'


// If you export only one class, use export DEFAULT
export default class Header extends React.Component {
	render() {
		return (
			<nav>
				<div className="nav-wrapper">
					<a href="/" className="brand-logo">Chat appje</a>
					<ul id="nav-mobile" className="right">
						<li><a href="/">Settings</a></li>
					</ul>
				</div>
  			</nav>
		)
	}
}