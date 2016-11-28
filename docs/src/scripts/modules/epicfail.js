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
			<div className="col s10 offset-s1 epicfail">
				<div className="card">
					<div className="card-content">
						<img className="img" src="../public/img/epicfail.jpg" />
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