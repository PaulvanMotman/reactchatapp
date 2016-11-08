console.log('Main js loaded')

import React from 'react'
import ReactDOM from 'react-dom'
import Header from './modules/header.js'
import Footer from './modules/footer.js'
import '../styles/styles.scss'



class Text extends React.Component {
	constructor(props) {
		super(props)
	}
	renderNormal() {
		// console.log(this.props.children)
		return (
			<div className="textcloud">
				<p className="text">{this.props.children}</p>
			</div>
		)
	}
	render() {	
		return this.renderNormal()
	}
}

class Container extends React.Component {
	constructor(props) {
		super(props)
		this.eachText = this.eachText.bind(this)
		this.add = this.add.bind(this)
		this.state = {messages: []
		} 
	}
	add() {
		console.log("joehoe")
		var messages = this.state.messages
		messages.push(this.refs.newText.value)
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
		console.log(this)
		return (
			<div>
				<Header />
				<main>
					<div className="chatwindow">
						{this.state.messages.map(this.eachText)}
					</div>
					<textarea ref="newText"></textarea>
					<button onClick={this.add}>send</button>
				</main>
				<Footer />
			</div>
		)

	}
}




ReactDOM.render(<Container />, document.getElementById('container'))
