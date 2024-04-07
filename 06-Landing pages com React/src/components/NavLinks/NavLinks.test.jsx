import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/renderTheme';
import { NavLinks } from '.';

import mock from './mock';
import { theme } from '../../styles/theme';

describe('<NavLinks />', () => {
    it('Should render links', () => {
        renderTheme(<NavLinks links={mock} />);

        expect(screen.getAllByRole('link')).toHaveLength(mock.length);
    });

    it('Should not render links', () => {
        renderTheme(<NavLinks />);

        expect(screen.queryAllByText(/links/i)).toHaveLength(0);
    });

    it('Should render flex-flow row links', () => {
        renderTheme(<NavLinks links={mock} />);

        expect(screen.getByText(/link 10/i).parentElement).toHaveStyleRule('flex-flow', 'row wrap');
    });

    it('Should math snapshot', () => {
        const { container } = renderTheme(<NavLinks links={mock} />);

        expect(container.firstChild).toMatchSnapshot();
    });
});
