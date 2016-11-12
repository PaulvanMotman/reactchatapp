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
		this.state = {
			action: "register",
			database: []
		} 
	}
	changeView () {
		if ( this.state.action == "register" ) {
			console.log(this.state)
			this.setState ( { action: "login" } )
		} else if (this.state.action == "login") {
			console.log(this.state)
			this.setState ( { action: "chat" } )
		} else {
			console.log("You're chatting!")
		}
	}
	registerUser (user) {
		let database = this.state.database
		database.push(user)
		this.setState({
			database: database
		})
	}
	render() {
		var mainContent
		switch ( this.state.action ) {
			case "login":
				mainContent = <Login changeThatView={this.changeView}/>
				break
			case "chat":
				mainContent = <Chat />
				break
			default:
				mainContent = <Register changeThatView={this.changeView} registerThatUser={this.registerUser}/>
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
