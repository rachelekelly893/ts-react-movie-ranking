import React from 'react';

type WelcomeProps = {
	currentUser: any | null;
};

const Welcome: React.FC<WelcomeProps> = ({ currentUser }) => {
	return <div>{currentUser ? <h2>{`Welcome ${currentUser.displayName}`}</h2> : null}</div>;
};

export default Welcome;
