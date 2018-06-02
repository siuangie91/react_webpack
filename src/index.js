import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';

import Paragraph from './components/Paragraph';

class App extends React.Component {
	render() {
		return(
			<Fragment>
				<h1>Hello world! New copy</h1>
				<Paragraph />
			</Fragment>

		); 
	}
}

ReactDOM.render(<App />, document.getElementById('app'));