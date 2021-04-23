import React from 'react';
import './styles.css'

type MovieProps = {
	movie: string;
	user: string;
	votes: number;
	id: string;
	handleUpvote: Function
};

const MovieCard: React.FC<MovieProps> = ({ movie, user, votes, id, handleUpvote }) => (
	<div className="MovieCard" key={id}>
		<h2>{movie}</h2>
		<p>Added by: {user}</p>
		<p>Upvotes: {votes}</p>
		<button
		onClick={() =>
			handleUpvote({
				movie: movie,
				user: user,
				votes: votes + 1,
				id: id
		})}
>upvote</button>
	</div>
);

export default MovieCard;
