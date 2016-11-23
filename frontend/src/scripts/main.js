console.log('Main js loaded')



//// To do List

//// 1. Data-valadation    DONE
//// 2. Adjust login/register forms
//// 3. Welcome screen new logged in user    




// GLOBAL VARIABLES
var conversationcounter = 0 


// Import required modules
import React from 'react'
import ReactDOM from 'react-dom'
import Header from './modules/header.js'
import Footer from './modules/footer.js'
import Chat from './modules/chat.js'
import Register from './modules/register.js'
import Login from './modules/login.js'
import Fail from './modules/fail.js'
import Epicfail from './modules/epicfail.js'
import '../styles/styles.scss'


// Creating the container class
class Container extends React.Component {
	constructor(props) {
		super(props)
		// This doesnt get auto-binded in ES6, therefore:
		this.changeView = this.changeView.bind(this)
		this.registerUser = this.registerUser.bind(this)
		this.loginUser = this.loginUser.bind(this)
		this.updateConversations = this.updateConversations.bind(this)
		this.createConversations = this.createConversations.bind(this)
		this.getTime = this.getTime.bind(this)
		this.otherUsers = this.otherUsers.bind(this)
		this.otherUser = this.otherUser.bind(this)
		this.getRelevantConversation = this.getRelevantConversation.bind(this)
		// This state is the main state of the app, and data can be sent to child components by storing it in props
		var time = this.getTime()
		this.state = {
			action: "register",
			database: [{name: 'Paul', email: 'pcvanmotman@gmail.com', password: 'supersecret', convoId: []},],
			currentUser: {},
			otherUsers: [],
			otherUser: {},
			conversations: [{id: 0, messages: [{message: "Hi there, how you going? React is pretty neat.", name: "Paul van Motman", time: time}]}],
		} 
	}
	// This functions registers a user and stores it the database, which is currently located in the state
	registerUser (newuser) {

		// There is no simular user in the database and now we create a new conversation for this user
		var array = this.createConversations(newuser, this.state.database)
		var database = array[0]
		var user = array[1]


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
					this.setState({ action: "login", otherUser: {}}, () => {
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
		this.setState({ action: a, currentUser: c }, () => { 
			console.log(this.state)
			this.otherUsers() 
		})
	}
	getTime() {
		var time = Date.now()
		var date = new Date(time);
		console.log(date)
		var hours = date.getHours()
		var minutes = "0" + date.getMinutes()
		// Will display time in 10:30:23 format
		var formattedTime = hours + ':' + minutes.substr(-2) 
		return formattedTime
	}
	getRelevantConversation(a, b) {
			let match 
			for ( let i = 0; i < a.length; i++ ) {
				for ( let e = 0; e < b.length; e++ ) {
				    if ( a[i] === b[e] ) match = a[i] 
				}
			}
			return match
	}
	updateConversations (newmessage, user, otheruser) {

		let id = this.getRelevantConversation(user.convoId, otheruser.convoId)
		let time = this.getTime()
		let conversations = this.state.conversations
		conversations[id].messages.push({ message: newmessage, name: user.name, time: time })
		this.setState({ conversations: conversations}, () => { console.log(this.state) })
	}
	/////// HERE 
	createConversations (newuser, database) {

		for (var i = 0; i < database.length; i++) {
			var conversations = this.state.conversations
			conversations.push({ id: conversationcounter, messages: [] })
			this.setState({ conversations: conversations }, () => {
				console.log(this.state.conversations)
			})
			database[i].convoId.push(conversationcounter)
			newuser.convoId.push(conversationcounter)
			conversationcounter++
		}
		

		return [database, newuser]
		
	}
	otherUsers() {
		let u = this.state.currentUser
		let d = []
		for (var i = this.state.database.length - 1; i >= 0; i--) {
			d.push({
				name: this.state.database[i].name,
				email: this.state.database[i].email,
				password: this.state.database[i].password,
				convoId: this.state.database[i].convoId
			})
		}
		for (var i = 0; i < d.length; i++) {
			if (d[i].name == u.name && d[i].email == u.email && d[i].password == u.password) {
				console.log("THIS CURRENT USER MATCHES A USER IN THE DATABASE")
				console.log(d[i])
				d.splice(i,1)
				this.setState({ otherUsers: d}, () => { 
					console.log(this.state.otherUsers)
				})
			}
		}
	}
	otherUser(user) {
		this.setState({otherUser: user}, () => { 
			console.log(this.state)
		})
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
							<Chat updateThoseConversations={this.updateConversations} conversations={this.state.conversations} currentUser={this.state.currentUser} otherUsers={this.state.otherUsers} setOtherUser={this.otherUser} otherUser={this.state.otherUser} getThatReleventConversation={this.getRelevantConversation}/>
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
								<Login fail={true} changeThatView={this.changeView} loginThatUser={this.loginUser}/>
								<Fail />
							</div>
						</main>
					</div>
				)
				break
			case "failedRegistration":
				mainContent = ( 
					<div>
						<Header action={this.state.action} changeThatView={this.changeView}/>
						<main>
							<div className="row">
								<Register fail={true} registerThatUser={this.registerUser} database={this.state.database} changeThatView={this.changeView}/>
								<Epicfail />
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
							<Register registerThatUser={this.registerUser} database={this.state.database} changeThatView={this.changeView}/>
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
