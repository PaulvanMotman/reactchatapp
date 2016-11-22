console.log( 'Epicfail says wsup' )

// Import required modules
import React from 'react'

// If you export only one class, use export DEFAULT
// Creating the Fail class
export default class Epicfail extends React.Component {
	constructor(props) {
		super(props)
	}
	render() {
		return (	
			<div className="col s5 offset-s1">
				<div className="card">
					<div className="card-content">
						<img className="img" src="../img/epicfail.jpg" />
					</div>
					<div className="card-action">
						<div className="row">
							<div className="col s8 offset-s2">
								<h5>Username/email already exists.. Give it another try!</h5>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}