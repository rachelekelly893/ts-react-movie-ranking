import React from 'react';
import './styles.css'

type MovieProps = {
	movie: string;
	user: string;
	votes: number;
	id: string;
};

const MovieCard: React.FC<MovieProps> = ({ movie, user, votes, id }) => (
	<div className="MovieCard" key={id}>
		<h2>{movie}</h2>
		<p>Added by: {user}</p>
		<p>Upvotes: {votes}</p>
		<button>upvote</button>
	</div>
);

export default MovieCard;
