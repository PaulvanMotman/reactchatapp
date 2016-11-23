console.log( 'Footer says wsup' )

// Import required modules
import React from 'react'

// If you export only one class, use export DEFAULT
// Creating the Footer class
export default class Footer extends React.Component {
	render() {
		return (
			<footer id="footer" className="page-footer">
				<div className="container">
					<div className="row">
						<div className="col l6 s12">
							<h5>Disclaimer</h5>
							<p >For optimum performance and safety, please read these instructions carefully: <em>Don't Panic!</em></p>
						</div>
						<div className="col l4 offset-l2 s12">
							<h5>Cool links</h5>
							<ul>
								<li><a  href="https://www.paulvanmotman.com">Portfolio</a></li>
							</ul>
						</div>
					</div>
				</div>
				<div className="footer-copyright">
					<div className="container">
						<p className="center">© 2016 Paul van Motman</p>
					</div>
				</div>
			</footer>
		)
	}
}