import React from 'react';
import ReactDOM from 'react-dom';
import MovieCard from '../components/MovieCard/MovieCard';
import { fireEvent } from '@testing-library/react';

describe('MovieCard component tests', () => {
	let container: HTMLDivElement;
	const mockHandleUpvote = jest.fn();
	const mockHandleDownvote = jest.fn();

	beforeEach(() => {
		container = document.createElement('div');
		document.body.appendChild(container);
		ReactDOM.render(
			<MovieCard
				movie={'test movie'}
				user={'test user'}
				id={'test id'}
				votes={0}
				handleUpvote={mockHandleUpvote}
				handleDownvote={mockHandleDownvote}
			/>,
			container
		);
	});

	afterEach(() => {
		document.body.removeChild(container);
		container.remove();
	});

	it('Renders Movie Card correctly', () => {
		const inputs = container.getElementsByClassName('MovieCard');
		expect(inputs).toHaveLength(1);
		const movieTitle = container.getElementsByTagName('H2');
		expect(movieTitle[0].innerHTML).toBe('test movie');
		const UserVotesPs = container.getElementsByTagName('P');
		expect(UserVotesPs[0].innerHTML).toBe('Added by: test user');
		expect(UserVotesPs[1].innerHTML).toBe('Upvotes: 0');
		const buttons = container.getElementsByTagName('BUTTON');
		expect(buttons).toHaveLength(2);
	});

	it('runs handleUpvote on click upvote button', () => {
		const buttons = container.getElementsByTagName('BUTTON');
		let upvoteBtn = buttons[0];
		expect(mockHandleUpvote.mock.calls.length).toBe(0);
		fireEvent.click(upvoteBtn);
		expect(mockHandleUpvote.mock.calls.length).toBe(1);
	});

    it('runs handleDownvote on click upvote button', () => {
		const buttons = container.getElementsByTagName('BUTTON');
		let downvoteBtn = buttons[1];
		expect(mockHandleDownvote.mock.calls.length).toBe(0);
		fireEvent.click(downvoteBtn);
		expect(mockHandleDownvote.mock.calls.length).toBe(1);
	});
});
