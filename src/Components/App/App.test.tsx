import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import renderer from 'react-test-renderer';

import {Counter} from './App';

describe('App check', ()=>{
    test('renders learn react link', () => {
        const { getByText } = render(<App />);
        const linkElement = getByText(/learn react/i);
        expect(linkElement).toBeInTheDocument();
    });

    // test('DataCalculation component present', () => {
    //
    //     const {getByTestId} = render(<App />);
    //     const elelment = getByTestId(document.getElementById('.App-link'));
    //     expect(elelment).toContain('.App-link');
    // });

    it('My test suite', ()=>{
        expect(true).toEqual(true);
    });

    test('App', ()=>{
        const component = renderer.create(<App/>);
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot;
    });

    test('snapshot renders', ()=>{
        const component = renderer.create(<Counter counter={1} />);
        let tree = component.toJSON();
            expect(tree).toMatchSnapshot();
        })
    });

