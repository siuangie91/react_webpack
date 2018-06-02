import './scss/app.scss';

import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';

import Paragraph from './components/Paragraph';

class App extends React.Component {
	render() {
		return(
			<Fragment>
				<h1>Hello world! New copy</h1>
				<Paragraph />
				<p>More copy! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam, sequi quasi cum similique magni, nisi nulla repudiandae iste, ullam ipsum labore rerum non eligendi facilis, velit obcaecati qui laudantium commodi.</p>
			</Fragment>

		); 
	}
}

ReactDOM.render(<App />, document.getElementById('app'));