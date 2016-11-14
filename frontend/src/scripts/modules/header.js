console.log( 'Headers says wsup' )

// Import required modules
import React from 'react'

// If you export only one class, use export DEFAULT
// Creating the Header class
export default class Header extends React.Component {
	constructor (props) {
		super (props)
		this.goTo = this.goTo.bind(this)
	}
	// This function basically runs the changeView function of the container component
	goTo (x, y) {
		this.props.changeThatView(x,y)
	}
	render() {
		// To use parameters with the goTo function, it was important to wrap it in a function
		let menuRender
		if ( this.props.action !== "chat") {
			menuRender = (
				<ul id="nav-mobile" className="right">
						<li><a onClick={() => {this.goTo("login", {})}}>Login</a></li>
						<li><a onClick={() => {this.goTo("register", {})}}>Register</a></li>
				</ul>
			)
		} else {
			menuRender = (	
				<ul id="nav-mobile" className="right">
						<li onClick={() => {this.goTo("login", {})}}><a>Logout</a></li>
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











