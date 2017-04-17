import React from 'react';

import QuoteContainer from './QuoteContainer.component';
import QuoteFooter from './QuoteFooter.component';

export default class App extends React.Component {
	render(){
		return (
			<div style={{ backgroundColor: 'red', width: '100%', height: '100%' }} className="container-fluid">
				<div style={{ marginTop: '12.5%'}} className="col-xs-4 col-xs-offset-4">
					<QuoteContainer />
				</div>
				<QuoteFooter />
			</div>
		);
	}
}