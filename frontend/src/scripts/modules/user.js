console.log( 'User says wsup' )

// Import required modules
import React from 'react'

// If you export only one class, use export DEFAULT
// Creating the Text class
export default class Text extends React.Component {
	constructor(props) {
		super(props)
	}
	render() {	
		return (
			<div className="card userbox" onClick={() => this.props.setOtherUser(this.props.user)}>
				<div className="card-content">
					<div className="User">
						<p id="userName">{this.props.children.name}</p>
					</div>
				</div>
			</div>
		)
	}
}