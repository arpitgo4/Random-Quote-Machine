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
		return (
			<div id="quote" ref="quote" className="row" style={{ color: this.props.color }}>
				
			</div>
		);
	}

	componentDidUpdate(prevProps, prevState) {
		quote_callback(this.props.quote, this.props.author);
	}

	componentDidMount() {
		quoteContainer = $(this.refs.quote);
		quote_callback_mount(this.props.quote, this.props.author);
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
		return 
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

let quoteContainer;
const quote_callback = (quote, author) => {

	const quoteFontSize = '2.2';
	const quoteIconFontSize = quoteFontSize * 0.75;

	const html_template = `
		<div style="margin-top: 5%" class="col-xs-10 col-xs-offset-1 text-center">
						<i style="font-size: ${quoteIconFontSize}em; position: relative; bottom: 7px" class="fa fa-quote-left"></i>
						&nbsp;&nbsp;
						
						<p id="quote-line" style="display: inline; font-size: ${quoteFontSize}em"  
											class="">${quote}</p>
						
					</div>
					<div style="marginTop: 3%; paddingRight: 5.5%;" class="col-xs-11 text-right ">
						<footer style="font-size: 1.2em; font-weight: 100" class="blockquote">- ${author}</footer>
					</div>
	`;	

	$('#quote-line').fadeTo(1000, 0, () => {
		console.log('fading out done!!');
		quoteContainer.html(html_template);
		$('#quote-line').fadeTo(1000, 1, () => {
			console.log('fading in done!!');
		});
	});

}

const quote_callback_mount = (quote, author) => {
	const quoteFontSize = '2.2';
	const quoteIconFontSize = quoteFontSize * 0.75;

	const html_template = `
		<div style="margin-top: 5%" class="col-xs-10 col-xs-offset-1 text-center">
						<i style="font-size: ${quoteIconFontSize}em; position: relative; bottom: 7px" class="fa fa-quote-left"></i>
						&nbsp;&nbsp;
						
						<p id="quote-line" style="display: inline; font-size: ${quoteFontSize}em"  
											class="">${quote}</p>
						
					</div>
					<div style="marginTop: 3%; paddingRight: 5.5%;" class="col-xs-11 text-right ">
						<footer style="font-size: 1.2em; font-weight: 100" class="blockquote">- ${author}</footer>
					</div>
	`;

	quoteContainer.css({ opacity: 1 });
	quoteContainer.html(html_template);

	$('#quote-line').fadeTo(1000, 0, () => {
		console.log('fading out done!!')
		
		$('#quote-line').fadeTo(1000, 1, () => console.log('fading in done!!'));
	});
};