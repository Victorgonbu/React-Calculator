import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import React from 'react';
import Home from '../components/Home';


jest.mock('../components/Navbar', () => () => <nav data-testid='navbar' />) ;

describe('Home', () => {

  it('should render navbar component', async () => {
    render(<Home />);
    expect(await screen.getByTestId(/navbar/)).toBeInTheDocument();
  });
  
  it('should render a welcome message in home header', async () => {
    render(<Home />);

    expect( await screen.findByText('Welcome to our page')).toMatchSnapshot();
  });
});
