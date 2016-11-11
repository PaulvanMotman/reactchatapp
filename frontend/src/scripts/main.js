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
		return (
			<div className="body">
				<Header />
				<main>
					<div className="row">
						<div className="col s10 offset-s1">
							<div className="card">
								<div className="card-content chatwindow">
									{this.state.messages.map(this.eachText)}
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
				</main>
				<Footer />
			</div>
		)
	}
}




ReactDOM.render(<Container />, document.getElementById('container'))
