import { render, screen } from '@testing-library/react';
import { renderTheme } from '../../styles/renderTheme';
import Home from '.';
import { theme } from '../../styles/theme';

test('renders learn react link', () => {
    const { debug } = renderTheme(<Home />);
    const headingContainer = screen.getByRole('heading', { name: 'Hello word' }).parentElement;
    expect(headingContainer).toHaveStyle({
        background: theme.colors.mainBg,
    });
    expect(headingContainer).toMatchSnapshot();
    expect(headingContainer).toHaveStyleRule('background', 'red');
});
