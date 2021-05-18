import React from 'react';
import ReactDOM from 'react-dom';
import MovieCard from '../components/MovieCard/MovieCard';
import { render, screen, cleanup, fireEvent } from '@testing-library/react';

afterEach(() => {
	cleanup();
})

it('Should render MovieCard', () => {
	const mockHandleUpvote = jest.fn();
	const mockHandleDownvote = jest.fn();
	const { queryByTitle } = render(<MovieCard
						currentUser= {{email:'user email', displayName:'user display name'}}
						movie={'test movie'}
						user={'test user'}
						id={'test id'}
						votes={0}
						handleUpvote={mockHandleUpvote}
						handleDownvote={mockHandleDownvote}
					/>)
	const movieCard = queryByTitle('MovieCard')
	expect(movieCard).toBeTruthy();
});


// it('should render movie card component', () => {
// 	const mockHandleUpvote = jest.fn();
// 	const mockHandleDownvote = jest.fn();
// 	const movie = {
// 		currentUser: {email:'user email', displayName:'user display name'},
// 		movie: 'test movie',
// 		user: 'test user',
// 		id: 'test id',
// 		votes: 0,
// 		handleUpvote: mockHandleUpvote,
// 		handleDownvote: mockHandleDownvote
// 	}
// 	render(<MovieCard 
// 		currentUser={movie.currentUser.displayName}
// 		key={movie.id}
// 		user={movie.user}
// 		movie={movie.movie}
// 		votes={movie.votes}
// 		id={movie.id}
// 		handleUpvote={movie.handleUpvote}
// 		handleDownvote={movie.handleDownvote}/>);
// 	const movieCard = screen.getByTestId(`movieCard-${movie.movie}`);

// 	expect(movieCard).toBeInTheDocument();
// })

// describe('MovieCard component tests', () => {
// 	let container: HTMLDivElement;
// 	const mockHandleUpvote = jest.fn();
// 	const mockHandleDownvote = jest.fn();

// 	beforeEach(() => {
// 		container = document.createElement('div');
// 		document.body.appendChild(container);
// 		ReactDOM.render(
// 			<MovieCard
// 				currentUser= {{email:'user email', displayName:'user display name'}}
// 				movie={'test movie'}
// 				user={'test user'}
// 				id={'test id'}
// 				votes={0}
// 				handleUpvote={mockHandleUpvote}
// 				handleDownvote={mockHandleDownvote}
// 			/>,
// 			container
// 		);
// 	});

// 	afterEach(() => {
// 		document.body.removeChild(container);
// 		container.remove();
// 	});
// 	it('Renders Movie Card correctly when current user is logged in (show upvote and downvote buttons)', () => {
// 		const inputs = container.getElementsByClassName('MovieCard');
// 		expect(inputs).toHaveLength(1);
// 		const movieTitle = container.getElementsByTagName('H2');
// 		expect(movieTitle[0].innerHTML).toBe('test movie');
// 		const UserVotesPs = container.getElementsByTagName('P');
// 		expect(UserVotesPs[0].innerHTML).toBe('Added by: test user');
// 		expect(UserVotesPs[1].innerHTML).toBe('Upvotes: 0');
// 		const buttons = container.getElementsByTagName('BUTTON');
// 		expect(buttons).toHaveLength(2);
// 	});

// 	it('runs handleUpvote on click upvote button', () => {
// 		const buttons = container.getElementsByTagName('BUTTON');
// 		let upvoteBtn = buttons[0];
// 		expect(mockHandleUpvote.mock.calls.length).toBe(0);
// 		fireEvent.click(upvoteBtn);
// 		expect(mockHandleUpvote.mock.calls.length).toBe(1);
// 	});

//     it('runs handleDownvote on click upvote button', () => {
// 		const buttons = container.getElementsByTagName('BUTTON');
// 		let downvoteBtn = buttons[1];
// 		expect(mockHandleDownvote.mock.calls.length).toBe(0);
// 		fireEvent.click(downvoteBtn);
// 		expect(mockHandleDownvote.mock.calls.length).toBe(1);
// 	});
// });