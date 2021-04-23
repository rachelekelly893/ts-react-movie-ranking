import * as React from 'react';
import './styles.css'

const InputBox: React.FC = () => (
	<div className="InputBox">
		<h1>Add New Movie</h1>
		<input type="text" placeholder="Username" />
		<input type="text" placeholder="Movie Title" />
		<button>Add Movie</button>
	</div>
);

export default InputBox;
