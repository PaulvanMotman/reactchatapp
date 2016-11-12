console.log( 'Login says wsup' )

import React from 'react'

// If you export only one class, use export DEFAULT
export default class Login extends React.Component {
	constructor(props) {
		super(props)
		this.login = this.login.bind(this)
	}
	login() {
		let user = {
			email: this.refs.email.value,
			password: this.refs.password.value
		}
		this.props.loginThatUser(user)
	}
	render() {
		return (	
			<div className="row">
				<div className="col s6 offset-s3">
					<div className="card">
						<div className="card-content">
							<img className="img" src="../img/almost.jpg" />
						</div>
						<div className="card-action">
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
									<input ref="password"></input>
								</div>
								<div className="col s3 offset-s3">
									<button onClick={this.login}>Login</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}