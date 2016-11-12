console.log( 'Register says wsup' )

import React from 'react'

// If you export only one class, use export DEFAULT
export default class Register extends React.Component {
	constructor(props) {
		super(props)
		this.add = this.add.bind(this)
	}
	add() {
		let newuser = {
			name: this.refs.name.value,
			email: this.refs.email.value,
			password: this.refs.password.value
		}
		this.props.registerThatUser(newuser)
		this.props.changeThatView()
	}
	render() {
		return (	
			<div className="row">
				<div className="col s6 offset-s3">
					<div className="card">
						<div className="card-content">
							<img className="img" src="../img/hello.jpg" />
						</div>
						<div className="card-action">
							<div className="row">
								<div className="col s1">
									<label>Name</label>
								</div>
								<div className="col s2">
									<input ref="name"></input>
								</div>
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
								<div className="col s3">
									<button onClick={this.add}>Register</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}