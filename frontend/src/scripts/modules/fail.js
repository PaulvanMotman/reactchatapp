console.log( 'Fail says wsup' )

// Import required modules
import React from 'react'

// If you export only one class, use export DEFAULT
// Creating the Fail class
export default class Fail extends React.Component {
	constructor(props) {
		super(props)
	}
	render() {
		return (	
			<div className="col s5 offset-s1">
				<div className="card">
					<div className="card-content">
						<img className="img" src="../img/fail.jpg" />
					</div>
					<div className="card-action">
						<div className="row">
							<div className="col s8 offset-s2">
								<h5>Please try to log in again or register a new account!</h5>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}