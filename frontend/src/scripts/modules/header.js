console.log( 'Headers says wsup' )

// Import required modules
import React from 'react'

// If you export only one class, use export DEFAULT
// Creating the Header class
export default class Header extends React.Component {
	constructor (props) {
		super (props)
	}

	// Panel visibility toggle
	render() {
		let menuRender
		if ( this.props.action !== "chat") {
			menuRender = (
				<ul id="nav-mobile" className="right">
						<li>Login</li>
						<li>Register</li>
				</ul>
			)
		} else {
			menuRender = (	
				<ul id="nav-mobile" className="right">
						<li>Logout</li>
						<li>Register</li>
				</ul>
			)
		}
		return (
			<nav>
				<div className="nav-wrapper">
					<a href="/" className="brand-logo">Chat appje</a>
					{menuRender}
				</div>
  			</nav>
		)
	}
}











