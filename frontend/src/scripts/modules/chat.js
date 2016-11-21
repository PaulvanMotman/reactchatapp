console.log( 'Chat says wsup' )

// Import required modules
import React from 'react'
import Text from './text.js'
import User from './user.js'

// If you export only one class, use export DEFAULT
// Creating the Chat class
export default class Chat extends React.Component {
	constructor(props) {
		super(props)
		this.eachText = this.eachText.bind(this)
		this.add = this.add.bind(this)
		this.updateScroll = this.updateScroll.bind(this)
		this.eachUser = this.eachUser.bind(this)
	}
	// function that adds new messages to the chat
	add(e) {
		e.preventDefault()
		this.props.updateThoseConversations(this.refs.newText.value, this.props.currentUser, this.props.otherUser)
		this.refs.newText.value = ''
		this.updateScroll()
	}
	// this function automaticly makes sure that with every new message the window scrolls down
	updateScroll () {
	    var element = document.getElementById("chatwindow")
	    element.scrollTop = element.scrollHeight
	}
	// function that creates html tag for each message
	eachText(text, i) {
		return (
			<Text key={i} index={i}>
				{text}
			</Text>
		)
	}
	eachUser(user, i) {
		return (
			<User key={i} index={i} setOtherUser={this.props.setOtherUser} user={user}> 
				{user}
			</User>
		)
	}
	render() {
		let mainContent
		if (this.props.otherUser.convoId) {

			var id = this.props.getThatReleventConversation(this.props.currentUser.convoId, this.props.otherUser.convoId)

			mainContent = (
				<div className="col s10 offset">
					<div className="card">
						<div className="card-content" id="chatwindow">
							{this.props.conversations[id].messages.map(this.eachText)}
						</div>
						<div className="card-action">
							<div className="row">
								<form className="form" onSubmit={(e) => this.add(e)}>
									<div className="col s2">
										<input type="submit" value="Send"/>
									</div>
									<div className="col s10">
										<input type="text" ref="newText"/>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
			)
		} else {
			mainContent = <p>joehoe</p>
		}

		return (	
			<div className="row">
				<div className="col s2">
					{this.props.otherUsers.map(this.eachUser)}
				</div>
				{mainContent}
			</div>
		)
	}
}