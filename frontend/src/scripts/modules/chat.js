console.log( 'Chat says wsup' )

import React from 'react'
import Text from './text.js'

// If you export only one class, use export DEFAULT
export default class Chat extends React.Component {
	constructor(props) {
		super(props)
		this.eachText = this.eachText.bind(this)
		this.add = this.add.bind(this)
		this.state = {
			messages: []
		} 
	}
	add() {
		var messages = this.state.messages
		this.state.messages.push(this.refs.newText.value)
		this.setState({messages: messages})
	}
	eachText(text, i) {
		return (
			<Text key={i} index={i} >
				{text}
			</Text>
		)
	}
	render() {
		return (	
			<div className="row">
				<div className="col s10 offset-s1">
					<div className="card">
						<div className="card-content chatwindow">
							{this.state.messages.map(this.eachText)}
						</div>
						<div className="card-action">
							<div className="row">
								<div className="col s2">
									<button onClick={this.add}>send</button>
								</div>
								<div className="col s10">
									<textarea ref="newText"></textarea>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}