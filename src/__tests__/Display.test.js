import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import React from 'react';
import Display from '../components/Display';

describe('Display', () => {
  it('render result passed in props', async () => {
    const result = '15';
    render(<Display result={result} />);
    const display = await screen.getByText(result);
    expect(display).toBeInTheDocument();
    expect(display).toMatchSnapshot();
  });
});
