console.log( 'Login says wsup' )

// Import required modules
import React from 'react'

// If you export only one class, use export DEFAULT
// Creating the Login class
export default class Login extends React.Component {
	constructor(props) {
		super(props)
		this.login = this.login.bind(this)
	}
	// function that takes the values of the input field and passes it to the loginThatUser function
	login(e) {
		e.preventDefault()
		let user = {
			email: this.refs.email.value,
			password: this.refs.password.value
		}
		this.props.loginThatUser(user)
	}
	render() {
		let loginRender
		let mainContent = (
				<div className="card">
					<div className="card-content">
						<img className="img" src="../img/almost.jpg" />
					</div>
					<div className="card-action">
						<form className="form" onSubmit={(e) => this.login(e)}>
							<div className="row">
								<div className="col s1">
									<label>Email</label>
								</div>
								<div className="col s2">
									<input ref="email"></input>
								</div>
								<div className="col s1">
									<label>Password</label>
								</div>
								<div className="col s2">
									<input type="password" ref="password"></input>
								</div>
								<div className="col s3 offset-s3">
									<input type="submit" value="login"></input>
								</div>
							</div>
						</form>
					</div>
				</div>
			)
		if ( this.props.fail ==! null) {
			loginRender = (
				<div className="col s5" >
						{mainContent}
				</div>
			)
		} else {
			loginRender = (
				<div className="row">
					<div className="col s6 offset-s3">
						{mainContent}
					</div>
				</div>
			)
		}
		return (
			loginRender
		)
	}
}