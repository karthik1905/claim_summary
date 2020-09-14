import React from 'react';
import ReactDOM from 'react-dom'
import { render } from '@testing-library/react';
import App from './App';

it("renders without crashing",()=>{
    const div=document.createElement("div");
    ReactDOM.render(<App></App>,div);
})

it("renders button correctly",()=>{
    const {getByTestId}=render(<App label="Login"></App>);
    expect(getByTestId('Login')).toHaveTextContent('Login')
})
