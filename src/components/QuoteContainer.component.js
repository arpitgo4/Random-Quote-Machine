import React from 'react';

import Quote from './Quote.component';

export default class QuoteContainer extends React.Component {
	render(){
		return (
			<div style={{ backgroundColor: 'white'  }} className="block-center">
				<Quote quote="Hello, this is a quote!" author="Arpit Goyal" />
			</div>
		);
	}
}