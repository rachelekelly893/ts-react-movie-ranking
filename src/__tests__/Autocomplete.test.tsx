import React from 'react';
import ReactDOM from 'react-dom';
import AutocompleteInput from '../components/AutocompleteInput/AutocompleteInput';
import { fireEvent } from '@testing-library/react';

describe('Autocomplete component tests', () => {
	let container: HTMLDivElement;
	const mockSetMovie = jest.fn();

	beforeEach(() => {
		container = document.createElement('div');
		document.body.appendChild(container);
		ReactDOM.render(<AutocompleteInput stableSetMovie={mockSetMovie} />, container);
	});

	afterEach(() => {
		document.body.removeChild(container);
		container.remove();
	});

	it('Renders InputBox correctly', () => {
		const inputs = container.querySelectorAll('input');
		expect(inputs).toHaveLength(1);
	});

	it('allows movie title to be input then runs setMovie()', () => {
		const inputs = container.querySelectorAll('input');
		const movieInput = inputs[0];
		expect(mockSetMovie.mock.calls.length).toBe(1);
		fireEvent.change(movieInput, { target: { value: 'some movie' } });
		expect(inputs[0].value).toBe('some movie');
		expect(mockSetMovie.mock.calls.length).toBe(3);
	});
});
