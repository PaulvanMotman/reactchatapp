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
		this.eachUser = this.eachUser.bind(this)
	}
	// function that adds new messages to the chat
	add(e) {
		e.preventDefault()
		this.props.updateThoseConversations(this.refs.newText.value, this.props.currentUser, this.props.otherUser)
		this.refs.newText.value = ''
		this.props.updateThatScroll()
	}
	// function that creates html tag for each message
	eachText(text, i) {

		if (text.name == this.props.currentUser.name) {
			return (
				<Text key={i} index={i} setclass="bubble me">
					{text}
				</Text>
			)
		} else {
			return (
				<Text key={i} index={i} setclass="bubble you">
					{text}
				</Text>
			)
		}

	}
	// function that creates html tag for each user in the userlist
	eachUser(user, i) {
		return (
			<User key={i} index={i} setOtherUser={this.props.setOtherUser} user={user}> 
				{user}
			</User>
		)
	}
	componentDidUpdate(){
		this.props.updateThatScroll() 
	}
	render() {
		let mainContent
		// If the user clicked on an other user to chat with him, show the chatenvironment 
		if (this.props.otherUser.convoId) {

			var id = this.props.getThatReleventConversation(this.props.currentUser.convoId, this.props.otherUser.convoId)

			mainContent = (
				<div className="col s12 m10 offset">
					<div className="card chatenv">
						<div className="card-content" id="chatheader">
							<h5>Your chatting with {this.props.otherUser.name}</h5>
						</div>
						<hr/>
						<div className="card-content" id="chatwindow">
							{this.props.conversations[id].messages.map(this.eachText)}
						</div>
						<div className="card-action">
							<div className="row">
								<form className="form" onSubmit={(e) => this.add(e)}>
									<div className="col s12 m4">
										<input className="button z-depth-2" type="submit" value="Send"/>
									</div>
									<div className="col s12 m8">
										<input type="text" ref="newText"/>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
			)
		}  // Else, show the welcome environment 
		else {
			mainContent = (
				<div className="col s12 m10">
					<div className="card chatenv">
						<div className="card-content" id="chatheader">
							<h5>Welcome {this.props.currentUser.name}!</h5>
						</div>
						<hr/>
						<div className="card-content" id="chatwindow">
							<div className="bubble you">
								<p className="text">Chatappje: Hi there :). Thank you so much for using this chat app. If you're in the mood for a chat, click on one of the users at the left to chat!</p>
							</div>
					
						</div>
						<div className="card-action">
							<div className="row">
								<form className="form" onSubmit={(e) => e.preventDefault()}>
									<div className="col s12 m4">
										<input id="disabledbutton" className="button z-depth-2" disabled type="submit" value="Send"/>
									</div>
									<div className="col s12 m8">
										<input type="text" ref="newText" disabled/>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
			)
		}

		return (	
			<div className="row mainrow chatrow">
				<div className="col s12 m2 userrow">
					<div className="row">
						<div className="col s4 m12">
							<div id="buddies">
								<div>
									<p id="userName">Buddies:</p>
								</div>
							</div>
						</div>
						{this.props.otherUsers.map(this.eachUser)}
					</div>
				</div>
				{mainContent}
			</div>
		)
	}
}