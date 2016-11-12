console.log('Main js loaded')


// STILL TO DO

// 1. FIX THE START PAGE THAT YOU HAVE A FAILED TO LOG IN MESSAGE
// 2. USE CURRENTUSER DATA WITHIN THE CHAT COMPONENT
// 3. FIX A LOG OUT




// Import required modules
import React from 'react'
import ReactDOM from 'react-dom'
import Header from './modules/header.js'
import Footer from './modules/footer.js'
import Chat from './modules/chat.js'
import Register from './modules/register.js'
import Login from './modules/login.js'
import '../styles/styles.scss'

// Creating the container class
class Container extends React.Component {
	constructor(props) {
		super(props)
		// This doesnt get auto-binded in ES6, therefore:
		this.changeView = this.changeView.bind(this)
		this.registerUser = this.registerUser.bind(this)
		this.loginUser = this.loginUser.bind(this)
		// This state is the main state of the app, and data can be sent to child components by storing it in props
		this.state = {
			action: "register",
			database: [],
			currentUser: {}

		} 
	}
	// This function switches the view from register --> login --> chat components
	changeView () {
		if ( this.state.action == "register" ) {
			console.log(this.state)
			this.setState ( { action: "login" } )
		} else if (this.state.action == "login") {
			console.log(this.state)
			this.setState ( { action: "chat" } , () => {
				console.log(this.state)
			})
		} else if (this.state.action == "noUserFound") {
			console.log(this.state) 
		} else {
			console.log("You're chatting!")
		}
	}
	// This functions registers a user and stores it the database, which is currently located in the state
	registerUser (user) {
		let database = this.state.database
		database.push(user)
		this.setState({ database: database }, () => {
			// It's important to use a callback here, so the view is changed AFTER the state is set
			this.changeView()
		})
	}
	// This function handles the login
	loginUser (user) {
		let database = this.state.database
		let currentUser = this.state.currentUser
		// A loop through the database
		for (let i = database.length - 1; i >= 0; i--) {
			// If there is a match with a user in the database..
			if (database[i].email == user.email && database[i].password == user.password) {
				currentUser = database[i]
				// .. the state is updated and the view goes to the chat component
				this.setState({ currentUser: currentUser }, () => {
					this.changeView()
				})
			}
			// If not the user goes back to the starting page (register)
			else {
				this.setState({ action: "noUserFound" }, () => {
					this.changeView()
				})
			}
		}
	}
	// Render function
	render() {
		let mainContent
		switch ( this.state.action ) {
			case "login":
				mainContent = <Login changeThatView={this.changeView} loginThatUser={this.loginUser}/>
				break
			case "chat":
				mainContent = <Chat />
				break
			default:
				mainContent = <Register registerThatUser={this.registerUser}/>
			break
		}
		return (
			<div className="body">
				<Header />
				<main>
					{mainContent}
				</main>
				<Footer />
			</div>
		)
	}
}






ReactDOM.render(<Container />, document.getElementById('container'))
