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
		this.state = {
			action: "register"
		} 
	}
	changeView () {
		if ( this.state.action == "register" ) {
			console.log("register is triggered")
			this.setState ( { action: "login" } )
		} else if (this.state.action == "login") {
			console.log("login is triggered")
			this.setState ( { action: "chat" } )
		} else {
			console.log("You're chatting!")
		}
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
				mainContent = <Register changeThatView={this.changeView}/>
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
