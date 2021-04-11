import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import React from 'react';
import Header from '../components/Header';


describe('Header', () => {
    it('renders given text in props in a h1 tag', async () => {
        render(<Header text='text in header' />);
        const header = await screen.getByText(/text in header/);
        expect(header).toBeInTheDocument();
    });
});