import React from 'react';

export default class TwitterBtn extends React.Component {
	render() {
		return (
			<div className="">
				<i id="twitterBtn" style={{ color: 'white', backgroundColor: this.props.backgroundColor,
							fontSize: '1.5em' }}
					className="btn fa fa-twitter" onClick={() => this.props.onClick()}></i>
			</div>
		);
	}
}