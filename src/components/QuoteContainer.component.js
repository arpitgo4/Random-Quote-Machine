import React from 'react';

import Quote from './Quote.component';
import TwitterBtn from './TwitterBtn.component';
import NewQuoteBtn from './NewQuotebtn.component';

export default class QuoteContainer extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			color: props.color,
			backgroundColor: props.backgroundColor 
		}
	}

	render(){
		return (
			<div style={{ backgroundColor: 'white', color: this.state.color }} className="block-center">
				<Quote quote="Hello, this is a quote!" author="Arpit Goyal" />
				<div className="row">
					<div className="col-xs-6 col-xs-offset-1">
						<TwitterBtn onClick={() => this.handleTwitterClick()} backgroundColor={this.state.color} />
					</div>
					<div className="col-xs-4 col-xs-offset-4">
						<NewQuoteBtn backgroundColor={this.state.color} onClick={() => this.handleNewQuoteClick()} />
					</div>
				</div>
			</div>
		);
	}

	handleTwitterClick() {
		console.log("TwitterBtn Clicked!!");
	}

	handleNewQuoteClick() {
		console.log("New Quote Btn Clicked!!");
	}
}