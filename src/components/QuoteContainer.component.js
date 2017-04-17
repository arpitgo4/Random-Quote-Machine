import React from 'react';

import Quote from './Quote.component';
import TwitterBtn from './TwitterBtn.component';
import NewQuoteBtn from './NewQuoteBtn.component';

export default class QuoteContainer extends React.Component {

	render(){
		return (
			<div style={{ backgroundColor: 'white', color: this.props.color }} className="block-center">
				<Quote quote={this.props.quote} author={this.props.author} />
				<div className="row">
					<div className="col-xs-6 col-xs-offset-1">
						<TwitterBtn onClick={this.props.TwitterBtnOnClick} backgroundColor={this.props.color} />
					</div>
					<div className="col-xs-4 col-xs-offset-4">
						<NewQuoteBtn backgroundColor={this.props.color} onClick={this.props.NewQuoteBtnOnClick} />
					</div>
				</div>
			</div>
		);
	}
}