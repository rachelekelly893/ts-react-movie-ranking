import React from 'react';
import ReactDOM from 'react-dom';
import MovieCard from '../components/MovieCard/MovieCard';

describe('Login component tests', () => {

    let container: HTMLDivElement

    beforeEach(() => {
        container = document.createElement('div');
        document.body.appendChild(container);
        ReactDOM.render(<MovieCard movie={'test movie'} user={'test user'} id={'test id'} votes={0} handleUpvote={()=>{}} handleDownvote={()=>{}}/>, container);
    })

    afterEach(() => {
        document.body.removeChild(container);
        container.remove();
    })

    it('Renders Movie Card correctly', () => {
        const inputs = container.getElementsByClassName('MovieCard');
        expect(inputs).toHaveLength(1);
        const movieTitle = container.getElementsByTagName('H2');
        expect(movieTitle[0].innerHTML).toBe('test movie');
        const UseVotesPs = container.getElementsByTagName('P');
        expect(UseVotesPs[0].innerHTML).toBe('Added by: test user');
        expect(UseVotesPs[1].innerHTML).toBe('Upvotes: 0');
        const buttons = container.getElementsByTagName('BUTTON');
        expect(buttons).toHaveLength(2);
    });

})