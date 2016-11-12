console.log( 'Text says wsup' )

import React from 'react'

export default class Text extends React.Component {
	constructor(props) {
		super(props)
	}
	render() {	
		return (
			<div className="textcloud">
				<p className="text">{this.props.children}</p>
			</div>
		)
	}
}