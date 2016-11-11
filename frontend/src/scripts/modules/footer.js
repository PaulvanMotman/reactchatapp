console.log( 'Footer says wsup' )

import React from 'react'


// If you export only one class, use export DEFAULT
export default class Footer extends React.Component {
	render() {
		return (
			<footer id="footer" className="page-footer">
				<div className="container">
					<div className="row">
						<div className="col l6 s12">
							<h5 className="white-text">Disclaimer</h5>
							<p className="grey-text text-lighten-4">For optimum performance and safety, please read these instructions carefully: <em>Don't Panic!</em></p>
						</div>
						<div className="col l4 offset-l2 s12">
							<h5 className="white-text">Cool links</h5>
							<ul>
								<li><a className="grey-text text-lighten-3" href="https://www.paulvanmotman.com">Portfolio</a></li>
							</ul>
						</div>
					</div>
				</div>
				<div className="footer-copyright">
						<div className="container">
							© 2016 Paul van Motman
					</div>
				</div>
			</footer>
		)
	}
}