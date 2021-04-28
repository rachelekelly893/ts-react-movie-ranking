import React from 'react';
import ReactDOM from 'react-dom';
import InputBox from '../components/InputBox/InputBox';
import { fireEvent } from '@testing-library/react';

describe('Login component tests', () => {
	let container: HTMLDivElement;

	beforeEach(() => {
		container = document.createElement('div');
		document.body.appendChild(container);
		ReactDOM.render(
			<InputBox user={'test user'} setUser={()=>{}} movie={'test movie'} stableSetMovie={()=>{}} addMovie={() => {}} />,
			container
		);
	});

	afterEach(() => {
		document.body.removeChild(container);
		container.remove();
	});

	it('Renders InputBox correctly', () => {
		const inputs = container.querySelectorAll('input');
		expect(inputs).toHaveLength(2);
        const buttons = container.getElementsByTagName('BUTTON');
        expect(buttons).toHaveLength(1);      
	});
    
    it('allows username to be input', () => {
        const inputs = container.querySelectorAll('input');
        const userInput = inputs[1];
        fireEvent.change(userInput, { target: { value: 'some user' } });
        expect(inputs[1].value).toBe('some user');
    });

    it('allows movie title to be input', () => {
        const inputs = container.querySelectorAll('input');
        const movieInput = inputs[0];
        fireEvent.change(movieInput, { target: { value: 'some movie' } });
        expect(inputs[0].value).toBe('some movie');
    });

});
