import React from 'react';

import QuoteContainer from './QuoteContainer.component';

export default class App extends React.Component {
	render(){
		return (
			<div style={{ backgroundColor: 'red' }} className="container-fluid">
				<h1>Application</h1>
				<QuoteContainer />
			</div>
		);
	}
}