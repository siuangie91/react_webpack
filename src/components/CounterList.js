import React from 'react';
import Counter from './Counter';

const createRange = num => Array.from(Array(num).keys());

class CounterList extends React.Component {
	state = {
		numCounters: 2
	}

	addCounter = () => {
		this.setState(prevState => {
			return {
				numCounters: prevState.numCounters + 1
			}
		})
	}

	renderCounter(index) {
		return (
			<li key={index}><Counter /></li>
		);
	}

	render() {
		const countersArray = createRange(this.state.numCounters);

		return (
			<div>
				<h1>Hello World!</h1>
				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo ea distinctio veritatis praesentium quo aperiam ducimus placeat accusamus, possimus nihil, qui, iusto dignissimos! Iste labore facilis mollitia aliquid distinctio inventore.</p>
				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius consequuntur voluptas earum ex praesentium dolorum, molestiae sit suscipit. Fuga in fugit laboriosam. Possimus ex, recusandae perferendis expedita quas eveniet aliquam!</p>
				<button className="add-counter" onClick={this.addCounter}>Add Counter</button>
				<ul>
					{
						countersArray.map(num => this.renderCounter(num))
					}
				</ul>
			</div>
		);
	}
};

export default CounterList;