import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import React from 'react';
import Home from '../components/Home';


jest.mock('../components/Navbar', () => () => <nav data-testid='navbar' />) ;
jest.mock('../components/Header', () => () => <nav data-testid='header' />) ;
jest.mock('../components/Text', () => () => <nav data-testid='text' />) ;


describe('Home', () => {

  it('should render navbar component', async () => {
    render(<Home />);
    expect(await screen.getByTestId(/navbar/)).toBeInTheDocument();
  });
  
  it('should render header component with a welcome message', async () => {
    render(<Home />);

    expect( await screen.getByTestId(/header/)).toBeInTheDocument();
  });

  it('should render two parragraphs using Text component', async () => {
    render(<Home />);

    expect(await screen.getAllByTestId(/text/)).toHaveLength(2);
  });
});
