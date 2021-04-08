import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import React from 'react';
import Home from '../components/Home';

describe('Home', () => {
  it('Renders Nabvar, a header and 2 paragraphs', async () => {
    render(<Home />);

    expect (await screen.findByText('Welcome to our page')).toEqual(<h1>Welcome to our page</h1>);
  });
});
