import React, { useEffect, useState } from 'react';
import './App.css';
import firebase from './firebase';

//components
import InputBox from './components/InputBox/InputBox';
import MovieCard from './components/MovieCard/MovieCard';

//types
export type Movie = {
	movie: string;
	user: string;
	votes: number;
	id: string;
};

function App() {
	const [ movies, setMovies ] = useState<Movie[]>([]);
	const [ loading, setLoading ] = useState<boolean>(false);
	const [ user, setUser ] = useState<string>('');
	const [ movie, setMovie ] = useState<string>('');

	const ref = firebase.firestore().collection('movies');

	//get data
	function getMovies(): void {
		setLoading(true);
		ref.onSnapshot((querySnapshot) => {
			const items: any = [];
			querySnapshot.forEach((doc) => {
				items.push(doc.data());
			});
			setMovies(items);
		});
		setLoading(false);
	}

	useEffect(() => {
		getMovies();
	});

	//save data
	function addMovie(newMovie: Movie): void {
		ref.doc(newMovie.id).set(newMovie).catch((err) => {
			console.error(err);
		});
	}

	//upvote
	function handleUpvote(updatedMovie: Movie): void {
		ref.doc(updatedMovie.id).update(updatedMovie).catch((err) => {
			console.error(err);
		});
	}

	//downvote
	function handleDownvote(updatedMovie: Movie): void {
		ref.doc(updatedMovie.id).update(updatedMovie).catch((err) => {
			console.error(err);
		});
	}

	return (
		<div>
			<InputBox user={user} setUser={setUser} movie={movie} setMovie={setMovie} addMovie={addMovie} />
			{loading ? <h1>Loading...</h1> : null}
			<div className="MovieCards">
				{movies.map((movie) => (
					<MovieCard
						key={movie.id}
						user={movie.user}
						movie={movie.movie}
						votes={movie.votes}
						id={movie.id}
						handleUpvote={handleUpvote}
						handleDownvote={handleDownvote}
					/>
				))}
			</div>
		</div>
	);
}

export default App;
