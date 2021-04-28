import * as React from 'react';
import './styles.css';
import { v4 as uuid } from 'uuid';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import TextField from '@material-ui/core/TextField';

import AutocompleteInput from '../AutocompleteInput/AutocompleteInput'


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
	stableSetMovie: Function;
	addMovie: Function;
};

const InputBox: React.FC<InputProps> = ({ user, setUser, movie, stableSetMovie, addMovie }) => {
	const classes = useStyles();

	function handleUserChange(e: React.ChangeEvent<HTMLInputElement>) {
		setUser(e.target.value);
	}

	return (
		<div className="InputBox" >
			<form className={classes.root} noValidate autoComplete="off">
				<AutocompleteInput 
				stableSetMovie={stableSetMovie}
				/>
				<TextField  style={{ width: '100%' }} id="standard-basic" label="Username" placeholder="Username" onChange={handleUserChange} />
			</form>
			<div>{`${movie} ${user}`}</div>
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
