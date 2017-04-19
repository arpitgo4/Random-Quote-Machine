import React from 'react';
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
						<i style={{ fontSize: `${quoteIconFontSize}em`, position: 'relative', bottom: '7px', opacity: 0 }} className="fa fa-quote-left to-fade"></i>
						&nbsp;&nbsp;

						<p ref="quote-line" id="quote-line" key={Math.random()} style={{ display: 'inline', fontSize: `${quoteFontSize}em` }}  
									className="to-fade">{this.prevQuote}</p>
													
					</div>
					<div style={{ marginTop: '3%', paddingRight: '5.5%' }} className="col-xs-11 text-right ">
						<footer id="quote-author" style={{ fontSize: '1.2em', fontWeight: '100', opacity: 0 }} className="blockquote to-fade">- {this.prevAuthor}</footer>
					</div>
				
			</div>
		);
	}

	componentDidUpdate(prevProps, prevState) {
		const toFade = $('.to-fade');
		setTimeout(() => {
			toFade[0].style.opacity = 0;
			toFade[1].style.opacity = 0;
			toFade[2].style.opacity = 0;

			setTimeout(() => {
				toFade[0].style.opacity = 1;				
				$('#quote-line').text(this.props.quote);
				toFade[1].style.opacity = 1;
				//$('#quote-author').text(this.props.author);
				toFade[2].style.opacity = 1;
			}, 1000);
		}, 100);

	}
}