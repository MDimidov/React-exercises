import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Games } from './Game';

// Mock-ване на react-router-dom
jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    Link: ({ children, to }) => <a href={to}>{children}</a>,
}));

describe('Game component', () => {
    test('Show game title', async () => {
        // Arrange
        let title = 'Lord of the Rings';

        // Act
        render(<Games _id={'id'} title={title} imageUrl={''} category={''} /> );

        // Assert
        expect(screen.getByText(title)).toBeInTheDocument();
    });

    
});
