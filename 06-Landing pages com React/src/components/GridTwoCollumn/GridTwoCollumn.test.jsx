import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/renderTheme';
import { GridTwoCollumn } from '.';

describe('<GridTwoCollumn />', () => {
    it('Should render...', () => {
        renderTheme(<GridTwoCollumn>Children</GridTwoCollumn>);

        expect(screen.getByRole('heading')).toBeInTheDocument();
    });
});
