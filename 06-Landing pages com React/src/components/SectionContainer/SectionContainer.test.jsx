import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/renderTheme';
import { SectionContainer } from '.';

describe('<SectionContainer />', () => {
    it('Should render content', () => {
        const { container } = renderTheme(
            <SectionContainer>
                <h1>Children</h1>
            </SectionContainer>,
        );

        expect(screen.getByRole('heading')).toBeInTheDocument();
        expect(container).toMatchSnapshot();
    });
});
