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

	return (
		<div>
			<InputBox />
			{loading ? <h1>Loading...</h1> : null}
			{movies.map((movie) => (
				<MovieCard user={movie.user} movie={movie.movie} votes={movie.votes} id={movie.id} />
			))}
		</div>
	);
}

export default App;
