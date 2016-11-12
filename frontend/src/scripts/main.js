console.log('Main js loaded')

import React from 'react'
import ReactDOM from 'react-dom'
import Header from './modules/header.js'
import Footer from './modules/footer.js'
import Chat from './modules/chat.js'
import Register from './modules/register.js'
import Login from './modules/login.js'
import '../styles/styles.scss'


class Container extends React.Component {
	constructor(props) {
		super(props)
		this.changeView = this.changeView.bind(this)
		this.registerUser = this.registerUser.bind(this)
		this.loginUser = this.loginUser.bind(this)
		this.state = {
			action: "register",
			database: [],
			currentUser: {}

		} 
	}
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
	registerUser (user) {
		let database = this.state.database
		database.push(user)
		this.setState({ database: database }, () => {
			this.changeView()
		})
	}
	loginUser (user) {
		let database = this.state.database
		let currentUser = this.state.currentUser
		for (let i = database.length - 1; i >= 0; i--) {
			if (database[i].email == user.email && database[i].password == user.password) {
				currentUser = database[i]
				this.setState({ currentUser: currentUser }, () => {
					this.changeView()
				})
			}
			else {
				this.setState({ action: "noUserFound" }, () => {
					this.changeView()
				})
			}
		}
	}
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
