import React from 'react';
import CounterList from './CounterList';

import { shallow, mount } from 'enzyme';
// import renderer from 'react-test-renderer';

describe('CounterList', () => {
	it('should render 2 counters by default', () => {
		const wrapper = shallow(<CounterList />);
		const counters = wrapper.find('Counter');
		expect(counters.length).toEqual(2);
	});

	it('can add more counters when we click the button', () => {
		const wrapper = shallow(<CounterList />);
		const btn = wrapper.find('button.add-counter');

		btn.simulate('click');
		const counters = wrapper.find('Counter');

		expect(counters.length).toEqual(3);
	});
});