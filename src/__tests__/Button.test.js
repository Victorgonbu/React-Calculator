import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import Button from '../components/Button';
import * as styles from '../styles/components.module.css';

describe('Button', () => {
    const {name, handleClick, color, width} = {
        name: '4',
        handleClick: jest.fn(),
        color: 'gray',
        width: 1
    };
  
    it('renders 1 instance of Button Component as a number', async () => {
        render(<Button key={name} name={name} handleClick={handleClick} color={color} width={width}/>);
        const button = await screen.getByText('4');
        expect(button).toBeInTheDocument();
        expect(button.classList.contains(styles.number)).toBe(true);
    });

    it('renders 1 instance of Button component as an operator', async () => {
        const operator = '+';
        const orange = 'orange';
        render(<Button key={operator} name={operator} handleClick={handleClick} color={orange} width={width}/>);
        const operation = await screen.getByText(operator);
        expect(operation).toBeInTheDocument();
        expect(operation.classList.contains(styles.operator)).toBe(true);
    });

    it('Call parent function to handle button click event', async () => {
        render(<Button key={name} name={name} handleClick={handleClick} color={color}  width={width}/>);
        fireEvent.click(await screen.getByText('4'));
        expect(handleClick).toHaveBeenCalled();
    });
});