console.log('Main js loaded')

import React from 'react'
import ReactDOM from 'react-dom'
// import { Menu, Header } from './modules/head.js'
import '../styles/styles.scss'

class Container extends React.Component {
	render() {
		return (
			<div>
				<h1>Waddup dude</h1>
				<p>Hows it going?</p>
			</div>
		)
	}
}


ReactDOM.render(<Container />, document.getElementById('container'))
