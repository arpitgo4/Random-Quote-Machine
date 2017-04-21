import React from 'react';
import ReactTransitionGroup from 'react-addons-transition-group';
import ReactDOM from 'react-dom';
import $ from 'jquery';

export default class Quote extends React.Component {

	componentWillUpdate(nextProps, nextState) {
		this.prevQuote = this.props.quote;
		this.prevAuthor = this.props.author;
	}
 
	render() {
		const quoteFontSize = '2.2';
		const quoteIconFontSize = quoteFontSize * 0.75;
		return (
			<div id="quote" className="row" style={{ color: this.props.color }}>
				
					<div style={{ marginTop: '5%' }} className="col-xs-10 col-xs-offset-1 text-center">
						<i style={{ fontSize: `${quoteIconFontSize}em`, position: 'relative', bottom: '7px' }} className="fa fa-quote-left"></i>
						&nbsp;&nbsp;
						<ReactTransitionGroup component={SingleChild}>

							{(
								() => <QuoteLine key={Math.random()} quoteFontSize={quoteFontSize} quote={this.props.quote} />
							)()}
							
						</ReactTransitionGroup>
						{quote_callback(this.props.quote, this.props.author)}
					</div>
					<div style={{ marginTop: '3%', paddingRight: '5.5%' }} className="col-xs-11 text-right ">
						<footer style={{ fontSize: '1.2em', fontWeight: '100' }} className="blockquote">- {this.props.author}</footer>
					</div>
				
			</div>
		);
	}
}

class QuoteLine extends React.Component {

	constructor() {
		super();
		this.state = { newQuoteHidden: true };
	}

	componentWillEnter(done) {
		console.log('new quote entered!!', $("#quote-line"));
		console.log('new comp', this);
		//$('#quote-line').fadeTo(1000, 0, done);
		done();
	}

	render() {
		return <p id="quote-line" style={{ display: 'inline', 
							fontSize: `${this.props.quoteFontSize}em`, opacity: this.props.hidden ? 0 : 1 }}  
											className="">{this.props.quote}</p>
	}

	componentWillLeave(done) {
		console.log('old quote leaving!!', this);
		$(this).fadeTo(1000, 0, done);
	}
}


class SingleChild extends React.Component {

	render() {
		const children = React.Children.toArray(this.props.children);
		console.log('quotes length', children.length);
		//return children[0] || null;]
		//children[0].props = { ...children[0].props, hidden: true };
		return (
			<div style={{ display: 'inline' }} >
				{children[0]}
				{children[1]}
			</div>
		);
	}
	
}

const quoteContainer = $('#quote');
const quote_callback = (quote, author) => {
	quoteContainer.html();
	console.log('new ', quote, author);
}
