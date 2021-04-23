import * as React from 'react';
import './styles.css'
import { v4 as uuid } from 'uuid';

type InputProps = {
	user: string;
	setUser: Function;
	movie: string;
	setMovie: Function;
	addMovie: Function;
}

const InputBox: React.FC<InputProps> = ({user, setUser, movie, setMovie, addMovie}) => {

	function handleUserChange(e: React.ChangeEvent<HTMLInputElement>) {
		setUser(e.target.value) 
	  }
	  function handleMovieChange(e: React.ChangeEvent<HTMLInputElement>) {
		setMovie(e.target.value) 
	  }

	  return (
	<div className="InputBox">
		<h1>Add New Movie</h1>
		<input type="text" placeholder="Username" onChange={handleUserChange}/>
		<input type="text" placeholder="Movie Title" onChange={handleMovieChange} />
		<button
		onClick={() =>
		addMovie({
			user: user,
			movie: movie,
			votes: 1,
			id: uuid()
		})}
>Add Movie</button>
	</div>
	  )
};

export default InputBox;
