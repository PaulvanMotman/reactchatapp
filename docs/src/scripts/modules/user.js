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

			<div className="col s4 m12">
				<div className="userbox z-depth-2" onClick={() => this.props.setOtherUser(this.props.user)}>
					<div>
						<p id="userName">{this.props.children.name}</p>
					</div>
				</div>
			</div>
			
		)
	}
}