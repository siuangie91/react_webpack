import React from 'react';

class Counter extends React.Component {
	state = {
		count: 0
	}

	makeIncrement = amount => () => {
		this.setState(prevState => ({
			count: prevState.count + amount
		}));
	}

	increment = this.makeIncrement(1);

	decrement = this.makeIncrement(-1);

	render() {
		return(
			<div>
				<p>Current count: {this.state.count}</p>
				<button 
					className="increment" 
					onClick={this.increment}>+1</button>
				<button 
					className="decrement" 
					onClick={this.decrement}>-1</button>
			</div>
		);
	}
}

export default Counter; 