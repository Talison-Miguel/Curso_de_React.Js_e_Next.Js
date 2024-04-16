import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/renderTheme';
import { SectionBackground } from '.';

describe('<SectionBackground />', () => {
    it('Should render with background dark', () => {
        const { container } = renderTheme(
            <SectionBackground background={true}>
                <h1>Children</h1>
            </SectionBackground>,
        );
        expect(screen.getByRole('heading')).toBeInTheDocument();
        expect(container).toMatchSnapshot();
    });

    it('Should render with background light', () => {
        const { container } = renderTheme(
            <SectionBackground background={false}>
                <h1>Children</h1>
            </SectionBackground>,
        );
        expect(screen.getByRole('heading')).toBeInTheDocument();
        expect(container).toMatchSnapshot();
    });
});
