import React from 'react';

import QuoteContainer from './QuoteContainer.component';
import QuoteFooter from './QuoteFooter.component';

export default class App extends React.Component {
	render(){
		return (
			<div style={{ backgroundColor: 'red'}} className="container-fluid">
				<div className="row">
					<div style={{ marginTop: '12.5%', marginLeft: '30%'}} className="col-xs-5 col-xs-offset-3">
						<QuoteContainer color="red" backgroundColor="white" />
					</div>			
				</div>
				<div className="row">
					<div className="col-xs-12">
						<QuoteFooter />
					</div>
				</div>
			</div>
		);
	}
}