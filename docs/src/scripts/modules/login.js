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


			<div className="row login mainrow">
				<div className="col s12 m6">
					<img className="img" src="../public/img/almost.jpg" />
				</div>
				<div className="col s12 m6">
					<form className="form" onSubmit={(e) => this.login(e)}>
						<div className="row">
							<div className="col s6">
								<label>Email</label>
							</div>
							<div className="col s6">
								<input ref="email" placeholder="Enter your email"></input>
							</div>
							<div className="col s6">
								<label>Password</label>
							</div>
							<div className="col s6">
								<input type="password" ref="password" placeholder="Enter your password"></input>
							</div>
							<div className="col s12 center-align">
								<input className="button z-depth-2" type="submit" value="Login"></input>
							</div>
						</div>
					</form>
				</div>
			</div>

			)
		if ( this.props.fail ==! null) {
			loginRender = (
				<div className="col s10 offset-s1" >
						{mainContent}
				</div>
			)
		} else {
			loginRender = (
				<div className="row mainrow">
					<div className="col s10 offset-s1">
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