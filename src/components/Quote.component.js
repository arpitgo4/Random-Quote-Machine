import React from 'react';

export default class Quote extends React.Component {
	render() {
		const quoteFontSize = '2';
		const quoteIconFontSize = quoteFontSize * 0.75;
		return (
			<div className="row" style={{ color: this.props.color }}>
				<div style={{ marginTop: '5%' }} className="col-xs-10 col-xs-offset-1 text-center">
					<i style={{ fontSize: `${quoteIconFontSize}em`, position: 'relative', bottom: '7px' }} className="fa fa-quote-left"></i>
					&nbsp;&nbsp;
					<p  style={{ display: 'inline', fontSize: `${quoteFontSize}em` }}  className="">{this.props.quote}</p>
				</div>
				<div className="col-xs-12 col-xs-offset-8">
					<footer style={{ fontSize: '1.2em', fontWeight: '100' }} className="blockquote">- {this.props.author}</footer>
				</div>
			</div>
		);
	}
}