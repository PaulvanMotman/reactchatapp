console.log( 'Chat says wsup' )

// Import required modules
import React from 'react'
import Text from './text.js'

// If you export only one class, use export DEFAULT
// Creating the Chat class
export default class Chat extends React.Component {
	constructor(props) {
		super(props)
		this.eachText = this.eachText.bind(this)
		this.add = this.add.bind(this)
	}
	// function that adds new messages to the chat
	add() {
		// let messages = this.state.messages
		// this.state.messages.push(this.refs.newText.value)
		this.props.updateThoseMessages(this.refs.newText.value)
		// this.setState({messages: messages})
	}
	// function that creates html tag for each message
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
							{this.props.messages.map(this.eachText)}
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