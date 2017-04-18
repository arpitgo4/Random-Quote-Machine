import React from 'react';

import Quote from './Quote.component';
import TwitterBtn from './TwitterBtn.component';
import NewQuoteBtn from './NewQuoteBtn.component';

export default class QuoteContainer extends React.Component {

	render(){
		return (
			<div id="quote-container" style={{ backgroundColor: 'white', color: this.props.color, paddingBottom: '8%' }}>
				<Quote quote={this.props.quote} author={this.props.author} />
				<div className="row" style={{ marginTop: '5%' }}>
					<div className="col-xs-2 col-xs-offset-1"
					 				style={{ position: 'relative' }}>
						<TwitterBtn onClick={this.props.TwitterBtnOnClick} backgroundColor={this.props.color} />
					</div>
					<div className="col-xs-2 col-xs-offset-5" >
						<NewQuoteBtn backgroundColor={this.props.color} onClick={this.props.NewQuoteBtnOnClick} />
					</div>
				</div>
			</div>
		);
	}
}