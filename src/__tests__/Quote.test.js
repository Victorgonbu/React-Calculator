import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import React from 'react';
import Quote from '../components/Quote';
/* eslint-disable react/display-name */
jest.mock('../components/Navbar', () => () => <nav data-testid="navbar" />);

describe('Quote', () => {
  it('renders Navbar component', async () => {
    render(<Quote />);
    const navbar = await screen.getByTestId(/navbar/);
    expect(navbar).toBeInTheDocument();
    expect(navbar).toMatchSnapshot();
  });

  it('renders Text component with a quote', async () => {
    render(<Quote />);
    const text = await screen.getByText('Mathematics is not about numbers, equations, computations, or algorithms: it is about understanding. –William Paul');
    expect(text).toBeInTheDocument();
    expect(text).toMatchSnapshot();
  });
});
