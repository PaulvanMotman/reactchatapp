console.log( 'Register says wsup' )

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
		// A loop through the database
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
			<div className="card">
					<div className="card-content">
						<img className="img" src="../img/hello.jpg" />
					</div>
					<div className="card-action">
						<form className="form" onSubmit={(e) => this.add(e)}>
							<div className="row">
								<div className="col s1">
									<label>Username</label>
								</div>
								<div className="col s2">
									<input ref="name" pattern=".{5,10}" required title="5 to 10 characters" placeholder="Enter your username"></input>
								</div>
								<div className="col s1">
									<label>Email</label>
								</div>
								<div className="col s2">
									<input ref="email" type="email" required placeholder="Enter a valid email address"></input>
								</div>
								<div className="col s1">
									<label>Password</label>
								</div>
								<div className="col s2">
									<input type="password" ref="password" input pattern=".{8,}" required title="8 characters minimum" placeholder="Enter your password"></input>
								</div>
								<div className="col s3">
									<input type="submit" value="register"></input>
								</div>
							</div>
						</form>
					</div>
				</div>
			)
		if ( this.props.fail ==! null) {
			registerRender = (
				<div className="col s5" >
						{mainContent}
				</div>
			)
		} else {
			registerRender = (
				<div className="row">
					<div className="col s6 offset-s3">
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