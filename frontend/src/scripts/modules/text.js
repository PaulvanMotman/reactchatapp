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
			<div className={this.props.setclass}>
				<p className="text"><span id="timecolor">{this.props.children.time}</span> {this.props.children.name}: {this.props.children.message}</p>
			</div>
		)
	}
}
