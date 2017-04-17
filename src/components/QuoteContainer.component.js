import React from 'react';

import Quote from './Quote.component';
import TwitterBtn from './TwitterBtn.component';
import NewQuoteBtn from './NewQuotebtn.component';

export default class QuoteContainer extends React.Component {
	render(){
		return (
			<div style={{ backgroundColor: 'white', color: 'white' }} className="block-center">
				<Quote quote="Hello, this is a quote!" author="Arpit Goyal" />
				<div className="row">
					<div className="col-xs-12">
						<div className="col-xs-2 col-xs-offset-1">
							<TwitterBtn onClick={() => this.handleTwitterClick()} color="blue" backgroundColor="red" />
						</div>
						<div className="col-xs-2 col-xs-9">
							<NewQuoteBtn backgroundColor="red" onClick={() => this.handlehandleNewQuoteClick()} />
						</div>
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