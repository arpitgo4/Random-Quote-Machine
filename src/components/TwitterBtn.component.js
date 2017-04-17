import React from 'react';

export default class TwitterBtn extends React.Component {
	render() {
		return (
			<div className="">
				<i style={{ color: this.props.backgroundColor, backgroundColor: 'white',
							fontSize: '3em' }} 
					className="fa fa-twitter-square" onClick={() => this.props.onClick()}></i>
			</div>
		);
	}
} 