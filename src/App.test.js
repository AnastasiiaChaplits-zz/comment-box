import { render, screen } from '@testing-library/react';
import App from './App';
import React from 'react';
import ReactDOM, { unmountComponentAtNode } from 'react-dom';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);

  expect(div.innerHTML).toContain('Hi there!')
  ReactDOM.unmountComponentAtNode(div)
})