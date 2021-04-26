import * as React from 'react';
import './styles.css';
import { v4 as uuid } from 'uuid';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			'& > *': {
				margin: theme.spacing(1),
				width: '25ch'
			}
		},
		button: {
			margin: theme.spacing(1),
			backgroundColor: '#4CAF50',
			color: 'white',
			padding: '12px 20px',
			'&:hover': {
				backgroundColor: '#2d6e2f'
			}
		}
	})
);

type InputProps = {
	user: string;
	setUser: Function;
	movie: string;
	setMovie: Function;
	addMovie: Function;
};

const InputBox: React.FC<InputProps> = ({ user, setUser, movie, setMovie, addMovie }) => {
	const classes = useStyles();

	function handleUserChange(e: React.ChangeEvent<HTMLInputElement>) {
		setUser(e.target.value);
	}
	function handleMovieChange(e: React.ChangeEvent<HTMLInputElement>) {
		setMovie(e.target.value);
	}

	return (
		<div className="InputBox">
			<h1>Add New Movie</h1>
			<form className={classes.root} noValidate autoComplete="off">
				<TextField id="standard-basic" label="Username" placeholder="Username" onChange={handleUserChange} />
				<TextField
					id="filled-basic"
					label="Movie Title"
					placeholder="Movie Title"
					onChange={handleMovieChange}
				/>
			</form>
			<Button
				variant="contained"
				color="primary"
				className={classes.button}
				startIcon={<AddIcon />}
				onClick={() =>
					addMovie({
						user: user,
						movie: movie,
						votes: 1,
						id: uuid()
					})}
			>
				Add A Movie!
			</Button>
		</div>
	);
};

export default InputBox;
