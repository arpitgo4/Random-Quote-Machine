import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import ReactDOM from 'react-dom';
import $ from 'jquery';

export default class Quote extends React.Component {

	componentWillUpdate(nextProps, nextState) {
		
	}

	render() {
		const quoteFontSize = '2.2';
		const quoteIconFontSize = quoteFontSize * 0.75;
		return (
			<div id="quote" className="row" style={{ color: this.props.color }}>
				
					<div style={{ marginTop: '5%' }} className="col-xs-10 col-xs-offset-1 text-center">
						<i style={{ fontSize: `${quoteIconFontSize}em`, position: 'relative', bottom: '7px' }} className="fa fa-quote-left to-fade"></i>
						&nbsp;&nbsp;
						
						<p style={{ display: 'inline', fontSize: `${quoteFontSize}em` }}  className="to-fade">{this.props.quote}</p>
							
						
						
					</div>
					<div style={{ marginTop: '3%', paddingRight: '5.5%' }} className="col-xs-11 text-right ">
						<footer style={{ fontSize: '1.2em', fontWeight: '100' }} className="blockquote to-fade">- {this.props.author}</footer>
					</div>
				
			</div>
		);
	}

	componentDidUpdate(prevProps, prevState) {
		/*const delay = 2000;
		$('.to-fade').fadeIn(delay, 'linear');*/
	}
}

/*<ReactCSSTransitionGroup
					transitionName="quote"
					transitionEnterTimeout={500}
					transitionLeaveTimeout={500}>

					</ReactCSSTransitionGroup>*/