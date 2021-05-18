import React, { useState } from 'react';
import firebase from '../../firebase';

//MUI
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
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

type LoginProps = {
	currentUser: any;
	userName: string;
	setUserName: Function;
};

const Login: React.FC<LoginProps> = ({ setUserName, userName, currentUser }) => {
	const classes = useStyles();

	const [ email, setEmail ] = useState<string>('');
	const [ password, setPassword ] = useState<string>('');
	const [ name, setName ] = useState<string>('');

	const register = () => {
		firebase
			.auth()
			.createUserWithEmailAndPassword(email, password)
			.then((res) => {
				const user = firebase.auth().currentUser;
				return user?.updateProfile({
					displayName: name
				});
			})
			.then(() => {
				resetInput();
			})
			.catch((err) => {
				console.error(err);
				alert(err.message);
			});
	};

	const login = () => {
		firebase
			.auth()
			.signInWithEmailAndPassword(email, password)
			.then(() => {
				resetInput();
			})
			.catch((err) => {
				console.error(err);
				alert(err.message);
			});
	};

	const logOut = () => {
		firebase.auth().signOut();
		setUserName('');
		resetInput();
	};

	const resetInput = () => {
		setEmail('');
		setPassword('');
		setName('');
	};

	return (
		<div>
			<div className="inputBox">
				<h1>Login/Register</h1>
				<TextField
					style={{ width: '100%' }}
					label="email"
					placeholder="E-mail"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
				/>
				<TextField
					style={{ width: '100%' }}
					label="password"
					placeholder="Password"
					type="password"
					value={password}
					onChange={(e) => setPassword(e.target.value)}
				/>
				<TextField
					style={{ width: '100%' }}
					label="name"
					placeholder="name"
					value={name}
					onChange={(e) => setName(e.target.value)}
				/>
			</div>
			<div>
				<Button
					style={{ width: '30%' }}
					variant="contained"
					color="primary"
					className={classes.button}
					onClick={register}
				>
					Register
				</Button>
				<Button
					style={{ width: '30%' }}
					variant="contained"
					color="primary"
					className={classes.button}
					onClick={login}
				>
					Login
				</Button>
				<Button
					style={{ width: '30%' }}
					variant="contained"
					color="primary"
					className={classes.button}
					onClick={logOut}
				>
					Log Out
				</Button>
			</div>
		</div>
	);
};

export default Login;
