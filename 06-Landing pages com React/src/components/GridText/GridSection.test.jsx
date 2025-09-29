import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/renderTheme';
import { GridSection } from '.';

describe('<GridSection />', () => {
    it('Should render...', () => {
        renderTheme(<GridSection>Children</GridSection>);

        expect(screen.getByRole('heading')).toBeInTheDocument();
    });
});
