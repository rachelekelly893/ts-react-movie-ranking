import React from 'react';
import ReactDOM from 'react-dom';
import InputBox from '../components/InputBox/InputBox';
import { fireEvent } from '@testing-library/react';

describe('InputBox component tests', () => {
	let container: HTMLDivElement;
	const mockAddMovie = jest.fn();
	const mockSetUser = jest.fn();
	const mockStableSetMovie = jest.fn();

	beforeEach(() => {
		container = document.createElement('div');
		document.body.appendChild(container);
		ReactDOM.render(
			<InputBox
				user={'test user'}
				setUser={mockSetUser}
				movie={'test movie'}
				stableSetMovie={mockStableSetMovie}
				addMovie={mockAddMovie}
			/>,
			container
		);
	});

	afterEach(() => {
		document.body.removeChild(container);
		container.remove();
	});

	it('Renders InputBox correctly', () => {
		const inputs = container.querySelectorAll('input');
		expect(inputs).toHaveLength(2);
		const buttons = container.getElementsByTagName('BUTTON');
		expect(buttons).toHaveLength(1);
	});

	it('allows username to be input then runs setUser()', () => {
		const inputs = container.querySelectorAll('input');
		const userInput = inputs[1];
		expect(mockSetUser.mock.calls.length).toBe(0);
		fireEvent.change(userInput, { target: { value: 'some user' } });
		expect(inputs[1].value).toBe('some user');
		expect(mockSetUser.mock.calls.length).toBe(1);
	});

	it('allows movie title to be input and then runs stableSetMovie()', () => {
		const inputs = container.querySelectorAll('input');
		const movieInput = inputs[0];
		expect(mockStableSetMovie.mock.calls.length).toBe(1);
		fireEvent.change(movieInput, { target: { value: 'some movie' } });
		expect(inputs[0].value).toBe('some movie');
		expect(mockStableSetMovie.mock.calls.length).toBe(3);
	});

	it('runs addMovie on button click', () => {
		const buttons = container.getElementsByTagName('BUTTON');
		const submitBtn = buttons[0];
		expect(mockAddMovie.mock.calls.length).toBe(0);
		fireEvent.click(submitBtn);
		expect(mockAddMovie.mock.calls.length).toBe(1);
	});
});
