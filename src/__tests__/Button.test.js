import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import Button from '../components/Button';

describe('Button', () => {
    const {name, handleClick, color, width} = {
        name: '4',
        handleClick: jest.fn(),
        color: 'gray',
        width: 1
    };
  
    it('renders 1 instance of button Component', async () => {
        render(<Button key={name} name={name} handleClick={handleClick} color={color} width={width}/>);
        expect(await screen.getByText('4')).toBeInTheDocument();
    });

    it('Call parent function to handle button click event', async () => {
        render(<Button key={name} name={name} handleClick={handleClick} color={color}  width={width}/>);
        fireEvent.click(await screen.getByText('4'));
        expect(handleClick).toHaveBeenCalled();
    });
});