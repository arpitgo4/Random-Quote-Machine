import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

export default class Quote extends React.Component {
	render() {
		const quoteFontSize = '2.2';
		const quoteIconFontSize = quoteFontSize * 0.75;
		return (
			<div id="quote" className="row" style={{ color: this.props.color }}>
				<div style={{ marginTop: '5%' }} className="col-xs-10 col-xs-offset-1 text-center">
					<i style={{ fontSize: `${quoteIconFontSize}em`, position: 'relative', bottom: '7px' }} className="fa fa-quote-left"></i>
					&nbsp;&nbsp;
					<p style={{ display: 'inline', fontSize: `${quoteFontSize}em` }}  className="">{this.props.quote}</p>
				</div>
				<div style={{ marginTop: '3%', paddingRight: '5.5%' }} className="col-xs-11 text-right ">
					<footer style={{ fontSize: '1.2em', fontWeight: '100' }} className="blockquote">- {this.props.author}</footer>
				</div>
			</div>
		);
	}
}