import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import React from 'react';
import ButtonPanel from '../components/ButtonPanel';
/* eslint-disable react/display-name */
jest.mock('../components/Button', () => () => <button aria-label="button" type="button" data-testid="button" />);

describe('ButtonPanel', () => {
  it('renders all calculator buttons', async () => {
    const handleClick = jest.fn();
    render(<ButtonPanel handleClick={handleClick} />);

    expect(await screen.getAllByTestId(/button/)).toHaveLength(19);
  });
});
