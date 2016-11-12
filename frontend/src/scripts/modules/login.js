console.log( 'Register says wsup' )

import React from 'react'

// If you export only one class, use export DEFAULT
export default class Login extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			
		} 
	}
	render() {
		return (	
			<div className="row">
				<div className="col s10 offset-s1">
					<div className="card">
						<div className="card-content">
							<img src="../img/almost.jpg" />
						</div>
						<div className="card-action">
							<div className="row">
								<div className="col s2">
									Register here!
								</div>
								<div className="col s10">
									<button onClick={this.props.changeThatView}>Press that button</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}