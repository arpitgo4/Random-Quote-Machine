import React from 'react';

export default class TwitterBtn extends React.Component {
	render() {
		return (
			<div className="col-xs-1">
				<i style={{ color: this.props.color, backgroundColor: this.props.backgroundColor }} 
					className="fa fa-twitter-square"></i>
			</div>
		);
	}
} 