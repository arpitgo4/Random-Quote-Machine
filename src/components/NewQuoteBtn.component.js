import React from 'react';

export default class NewQuoteBtn extends React.Component {
	render() {
		return (
			<div className="">
				<button style={{ backgroundColor: this.props.backgroundColor, color: 'white' }}
						onClick={() => this.props.onClick()}
						className="btn">New Quote</button>
			</div>
		);
	}
}