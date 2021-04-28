import React, { useEffect } from 'react';

//MUI Components
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

import { top100Films } from './topMovies';

type AutocompleteProps = {
	stableSetMovie: Function;
};

const AutocompleteInput: React.FC<AutocompleteProps> = ({ stableSetMovie }) => {
	const [ value, setValue ] = React.useState<string | null>(top100Films[0]);
	const [ inputValue, setInputValue ] = React.useState('');

	useEffect(() => {
		stableSetMovie(inputValue);
	}, [inputValue, stableSetMovie])

	return (
		<div style={{ width: '100%' }}>
			<Autocomplete
				onChange={(event: any, newValue: string | null) => {
					setValue(newValue);
					stableSetMovie(value);
				}}
				inputValue={inputValue}
				onInputChange={(event, newInputValue) => {
					setInputValue(newInputValue);
					stableSetMovie(inputValue);
				}}
				freeSolo
				id="free-solo-2-demo"
				disableClearable
				options={top100Films.map((option) => option)}
				renderInput={(params) => (
					<TextField
						{...params}
						label="Movie Title"
						margin="normal"
						InputProps={{ ...params.InputProps, type: 'search' }}
					/>
				)}
			/>
		</div>
	);
};

export default AutocompleteInput;
