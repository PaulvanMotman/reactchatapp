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
		this.props.registerThatUser(newuser)
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
							<form className="form" onSubmit={(e) => this.add(e)}>
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
										<input type="password" ref="password"></input>
									</div>
									<div className="col s3">
										<input type="submit" value="register"></input>
									</div>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		)
	}
}