import React from 'react';
import './styles.css';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			'& > *': {
				margin: theme.spacing(1)
			}
		},
		button: {
			margin: theme.spacing(1),
			padding: '12px 20px',
		}
	})
);

type MovieProps = {
	movie: string;
	user: string;
	votes: number;
	id: string;
	handleUpvote: Function;
	handleDownvote: Function;
};

const MovieCard: React.FC<MovieProps> = ({ movie, user, votes, id, handleUpvote, handleDownvote }) => {
	const classes = useStyles();

	return (
		<div className="MovieCard">
			<h2>{movie}</h2>
			<p>Added by: {user}</p>
			<p>Upvotes: {votes}</p>
			<div>
				<Button
					variant="contained"
					color="primary"
					className={classes.button}
					endIcon={<ThumbUpIcon />}
					onClick={() =>
						handleUpvote({
							movie: movie,
							user: user,
							votes: votes + 1,
							id: id
						})}
				/>
				<Button
					variant="contained"
					color="secondary"
					className={classes.button}
					endIcon={<ThumbDownIcon />}
					onClick={() =>
						handleDownvote({
							movie: movie,
							user: user,
							votes: votes - 1,
							id: id
						})}
				/>
			</div>
		</div>
	);
};

export default MovieCard;
