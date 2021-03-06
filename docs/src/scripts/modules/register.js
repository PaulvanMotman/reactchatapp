// Import required modules
import React from 'react'

// If you export only one class, use export DEFAULT
// Creating the Register class
export default class Register extends React.Component {
	constructor(props) {
		super(props)
		this.add = this.add.bind(this)
	}
	// function that takes the values of the input field and passes it to the registerThatUser function
	add(e) {
		e.preventDefault()

		let newuser = {
			name: this.refs.name.value,
			email: this.refs.email.value,
			password: this.refs.password.value,
			convoId: []
		}

		var database = this.props.database
		var go = true

		// Data Validation

		// Loop through the database
		for (let i = database.length - 1; i >= 0; i--) {
			// If there is a match with a user in the database..
			if (database[i].email == newuser.email || database[i].name == newuser.name) {
				// ...the user goes back to the starting page (register)
				this.props.changeThatView('failedRegistration', {})
				go = false
			}
		}

		if (go) {
			this.props.registerThatUser(newuser)
		}
	}
	render() {
		let registerRender
		let mainContent = (

			<div className="row register mainrow">
				<div className="col s12 m6">
					<img className="img" src="./public/img/hello.jpg" />
				</div>
				<div className="col s12 m6">
					<form className="form" onSubmit={(e) => this.add(e)}>
						<div className="row">
							<div className="col s6">
								<label>Username</label>
							</div>
							<div className="col s6">
								<input ref="name" pattern=".{3,8}" required title="3 to 8 characters" placeholder="Enter your username"></input>
							</div>
							<div className="col s6">
								<label>Email</label>
							</div>
							<div className="col s6">
								<input ref="email" type="email" required placeholder="Enter a valid email address"></input>
							</div>
							<div className="col s6">
								<label>Password</label>
							</div>
							<div className="col s6">
								<input type="password" ref="password" pattern=".{8,}" required title="8 characters minimum" placeholder="Enter your password"></input>
							</div>
							<div className="col s12 center-align">
								<input className="button z-depth-2" type="submit" value="Register"></input>
							</div>
						</div>
					</form>
				</div>
			</div>

			)
		if ( this.props.fail ==! null) {
			registerRender = (
				<div className="col s10 offset-s1" >
						{mainContent}
				</div>
			)
		} else {
			registerRender = (
				<div className="row mainrow">
					<div className="col s10 offset-s1">
						{mainContent}
					</div>
				</div>
			)
		}
		return (
			registerRender
		)

	}
}