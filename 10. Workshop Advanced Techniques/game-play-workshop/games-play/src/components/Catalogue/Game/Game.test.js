import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import { Games } from './Game';
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom'

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
        render(<Games _id={'id'} title={title} />);

        // Assert
        expect(screen.getByText(title)).toBeInTheDocument();
    });

    test('Redirect onClick Details btn', async () => {
        // Arrange
        global.window = { location: { pathname: null } };
        const itemId = 'id';

        render(
            <BrowserRouter>
                <Games _id={itemId} />
            </BrowserRouter>
        );

        await userEvent.click(screen.queryByText('Details'));

        expect(global.window.location.pathname).toContain(`/catalog/${itemId}`);
    });
});
