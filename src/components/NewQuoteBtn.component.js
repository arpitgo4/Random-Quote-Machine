import React from 'react';

import superagent from 'superagent';

export default class NewQuoteBtn extends React.Component {
	render() {
		return (
			<div>
				<button style={{ backgroundColor: this.props.backgroundColor, color: 'white' }}
						onClick={this.getNewQuote.bind(this)}
						className="btn">New Quote</button>
			</div>
		);
	}

	getNewQuote() {
		superagent
			.post('https://andruxnet-random-famous-quotes.p.mashape.com/?cat=movies')
			.set('X-Mashape-Key', 'Fxm7tbH899mshLEjfeSrlwQa0iOTp1nzmSqjsn8dyNsObDevJu')
			.set('Content-Type', 'application/x-www-form-urlencoded')
			.set('Accept', 'application/json')
			.end((err, res) => {
				if(err) {
					console.log('err', err);
					return;
				}
				const quoteObj = JSON.parse(res.text);
				this.props.onClick(quoteObj);
			});
	}
}