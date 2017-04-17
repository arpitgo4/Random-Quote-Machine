import React from 'react';

export default class NewQuoteBtn extends React.Component {
	render() {
		return (
			<div className="col-xs-2">
				<button style={{ backgroundColor: this.props.backgroundColor }}
						onClick={() => this.props.onClick()}>New Quote</button>
			</div>
		);
	}
}