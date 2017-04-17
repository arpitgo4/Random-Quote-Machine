import React from 'react';

export default class Quote extends React.Component {
	render() {
		return (
			<div className="">
				<div>
					<i className="fa fa-quote-left"></i>
					<p style={{ display: 'inline' }}  className="">{this.props.quote}</p>
				</div>
				<div className="text-right">
					<p className="blockquote">{this.props.author}</p>
				</div>
			</div>
		);
	}
}