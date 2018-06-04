import React from 'react';
import Counter from './Counter';

import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

describe('Counter component', () => {
	var wrapper;
	beforeEach(() => {
		wrapper = shallow(<Counter />);
	});

	it('matches the snapshot', () => {
		const tree = renderer.create(<Counter />).toJSON();

		expect(tree).toMatchSnapshot();
	});

	it('starts with a count of 0', () => {	
		const text = wrapper.find('p').text();

		expect(text).toEqual('Current count: 0');
	});

	it('can increment the count when button is clicked', () => {
		const incrementBtn = wrapper.find('button.increment');
		incrementBtn.simulate('click');
		const text = wrapper.find('p').text();

		expect(text).toEqual('Current count: 1');
	});

	it('can decrement the count when button is clicked', () => {
		const decrementBtn = wrapper.find('button.decrement');
		decrementBtn.simulate('click');
		const text = wrapper.find('p').text();

		expect(text).toEqual('Current count: -1');
	});
});