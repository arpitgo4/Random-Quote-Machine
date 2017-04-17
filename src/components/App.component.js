import React from 'react';

import QuoteContainer from './QuoteContainer.component';
import QuoteFooter from './QuoteFooter.component';

export default class App extends React.Component {

	constructor() {
		super();
		this.state = {
			quote: 'This a quote!!',
			author: 'Arpit Goyal'
		};
	}

	render(){
		return (
			<div style={{ backgroundColor: 'red'}} className="container-fluid">
				<div className="row">
					<div style={{ marginTop: '12.5%', marginLeft: '30%'}} className="col-xs-5 col-xs-offset-3">
						<QuoteContainer color="red" 
										backgroundColor="white"
										quote={this.state.quote}
										author={this.state.author}
										NewQuoteBtnOnClick={this.handleNewQuoteClick.bind(this)}
										TwitterBtnOnClick={this.handleTwitterClick.bind(this)} />
					</div>			
				</div>
				<div style={{marginTop: '2%' }} className="row">
					<div className="col-xs-12">
						<QuoteFooter />
					</div>
				</div>
			</div>
		);
	}

	handleTwitterClick() {
		console.log("TwitterBtn Clicked!!", this);
	}

	handleNewQuoteClick(quoteObj) {
	//	console.log(quoteObj);
		this.setState({...quoteObj});
	}
}