console.log('Main js loaded')


// STILL TO DO

// 1. FIX THE START PAGE THAT YOU HAVE A FAILED TO LOG IN MESSAGE -- DONE
// 2. USE CURRENTUSER DATA WITHIN THE CHAT COMPONENT -- DONE
// 3. FIX A LOG OUT -- DONE


// Import required modules
import React from 'react'
import ReactDOM from 'react-dom'
import Header from './modules/header.js'
import Footer from './modules/footer.js'
import Chat from './modules/chat.js'
import Register from './modules/register.js'
import Login from './modules/login.js'
import Fail from './modules/fail.js'
import '../styles/styles.scss'

// Creating the container class
class Container extends React.Component {
	constructor(props) {
		super(props)
		// This doesnt get auto-binded in ES6, therefore:
		this.changeView = this.changeView.bind(this)
		this.registerUser = this.registerUser.bind(this)
		this.loginUser = this.loginUser.bind(this)
		this.updateMessages = this.updateMessages.bind(this)
		this.getTime = this.getTime.bind(this)
		// This state is the main state of the app, and data can be sent to child components by storing it in props
		var time = this.getTime()
		this.state = {
			action: "register",
			database: [],
			currentUser: {},
			messages: [{message: "Hi there, how you going? React is pretty neat.", name: "Paul van Motman", time: time}]

		} 
	}
	// This functions registers a user and stores it the database, which is currently located in the state
	registerUser (user) {
		let database = this.state.database
		database.push(user)
		this.setState({ database: database }, () => {
			// It's important to use a callback here, so the view is changed AFTER the database is made
			this.changeView("login", {})
		})
	}
	// This function handles the login
	loginUser (user) {
		let database = this.state.database
		let currentUser = this.state.currentUser
		// First check if there are users in the database
		if (database.length == 0) {
			this.setState({ action: "noUserFound" })
		} else {
			// A loop through the database
			for (let i = database.length - 1; i >= 0; i--) {
				// If there is a match with a user in the database..
				if (database[i].email == user.email && database[i].password == user.password) {
					currentUser = database[i]
					// .. the state is updated and the view goes from login to chat component
					this.setState({ action: "login"}, () => {
						this.changeView("chat", currentUser)
					})
				}
				// If not the user goes back to the starting page (register)
				else {
					this.setState({ action: "noUserFound" })
				}
			}
		}
	}
	// This function switches the view from register --> login --> chat components
	changeView (a, c) {
		this.setState({ action: a, currentUser: c }, () => { console.log(this.state) })
	}
	getTime() {
		var time = Date.now()
		var date = new Date(time);
		console.log(date)
		var hours = date.getHours()
		var minutes = "0" + date.getMinutes()
		var seconds = "0" + date.getSeconds()
		// Will display time in 10:30:23 format
		var formattedTime = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2)
		return formattedTime
	}
	updateMessages (newmessage, username) {
		var time = this.getTime()
		let messages = this.state.messages
		messages.push({ message: newmessage, name: username, time: time })
		this.setState({ messages: messages}, () => { console.log(this.state) })
	}
	// Render function
	render() {
		let mainContent
		switch ( this.state.action ) {
			case "login":
				mainContent = (
					<div>
						<Header action={this.state.action} changeThatView={this.changeView}/>
						<main>
							<Login changeThatView={this.changeView} loginThatUser={this.loginUser} />
						</main>
					</div>
				)
				break
			case "chat":
				mainContent = (
					<div>
						<Header action={this.state.action} changeThatView={this.changeView}/>
						<main>
							<Chat updateThoseMessages={this.updateMessages} messages={this.state.messages} currentUser={this.state.currentUser}/>
						</main>
					</div>
				)
				break
			case "noUserFound":
				mainContent = ( 
					<div>
						<Header action={this.state.action} changeThatView={this.changeView}/>
						<main>
							<div className="row">
								<Fail />
								<Login fail={true} changeThatView={this.changeView} loginThatUser={this.loginUser}/>
							</div>
						</main>
					</div>
				)
				break
			default:
				mainContent = (
					<div>
						<Header action={this.state.action} changeThatView={this.changeView}/>
						<main>
							<Register registerThatUser={this.registerUser}/>
						</main>
					</div>
				)
			break
		}
		return (
			<div className="body">
				{mainContent}
				<Footer />
			</div>
		)
	}
}






ReactDOM.render(<Container />, document.getElementById('container'))
