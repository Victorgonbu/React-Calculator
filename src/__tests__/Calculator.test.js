import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import React from 'react';
import Calculator from '../components/Calculator';
/* eslint-disable react/display-name */
jest.mock('../components/Navbar', () => () => <nav data-testid="navbar" />);
jest.mock('../components/Header', () => () => <nav data-testid="header" />);
jest.mock('../components/Display', () => () => <nav data-testid="display" />);
jest.mock('../components/ButtonPanel', () => () => <nav data-testid="buttonPanel" />);

describe('Calculator', () => {
  it('renders navbar component', async () => {
    render(<Calculator />);
    const navbar = await screen.getByTestId(/navbar/);
    expect(navbar).toBeInTheDocument();
    expect(navbar).toMatchSnapshot();
  });

  it('renders calculator container', async () => {
    render(<Calculator />);
    const container = await screen.getByTestId(/calculator-container/);
    expect(container).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });

  it('renders Header component within calculator container', async () => {
    render(<Calculator />);
    const header = await screen.getByTestId(/header/);
    expect(header).toBeInTheDocument();
    expect(header).toMatchSnapshot();
  });

  it('renders Display component within calculator container', async () => {
    render(<Calculator />);
    const display = await screen.getByTestId(/display/);
    expect(display).toBeInTheDocument();
    expect(display).toMatchSnapshot();
  });

  it('renders ButtonPanel component within calculator container', async () => {
    render(<Calculator />);
    const buttonPanel = await screen.getByTestId(/buttonPanel/);
    expect(buttonPanel).toBeInTheDocument();
    expect(buttonPanel).toMatchSnapshot();
  });
});
