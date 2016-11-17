console.log( 'Text says wsup' )

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
			<div className="textcloud">
				<p className="text">At {this.props.children.time} {this.props.children.name} says: {this.props.children.message}</p>
			</div>
		)
	}
}


// <blockquote class="example-twitter" cite="https://twitter.com/necolas/status/9880187933">
// 	<p>{this.props.children.message}</p>
// </blockquote>
// <p><a>@{this.props.children.name}</a> at <a>{this.props.children.time}</a></p>